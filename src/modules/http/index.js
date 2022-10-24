import axios from 'axios';
const CancleToken = axios.CancelToken;
/**
 * axios 请求封装
 * @param {string} baseUrl 基础请求路径
 * @param store vuex 的 store
 * @param {object} 引用中的公共配置
 */
class HttpRequest {
  constructor(baseUrl, store, publicConfig) {
    this.baseUrl = baseUrl;
    this.store = store;
    this.publicConfig = publicConfig;
    this.pendding = {};
  }

  // 合并配置项
  mergeRequestConfig(option) {
    const baseConfig = {
      baseUrl: this.baseUrl,
      timeout: 60 * 100,
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    };
    const config = Object.assign(baseConfig, option);
    return config;
  }

  removePending(key, isRequest = false) {
    if (this.pendding[key] && isRequest) {
      this.pendding[key]('请求被取消');
    }
    delete this.pendding[key];
  }

  // 拦截逻辑
  interceptors(instance) {
    instance.interceptors.request.use(
      (config) => {
        let isPublic = false;
        const key = config.url + '&' + config.method;
        const token = this.store.state.token;
        this.publicConfig.publicPath.map((path) => {
          isPublic = isPublic || path.test(config.url);
        });
        if (!isPublic && token) {
          config.headers.Authorization = 'Bearer' + token;
        }
        this.removePending(key, true);
        config.cancelToken = new CancleToken((c) => {
          this.pendding[key] = c;
        });
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (res) => {
        const key = res.config.url + '&' + res.config.method;
        this.removePending(key);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 生成实例
  request(option) {
    const instance = axios.create();
    const newOption = this.mergeRequestConfig(option);
    this.interceptors(instance);
    return instance(newOption);
  }

  // get 方法
  get(url, config) {
    const getDefault = {
      method: 'get',
      url,
    };
    const op = Object.assign(getDefault, config);
    return this.request(op);
  }

  // post 方法
  post(url, config) {
    const postDefault = {
      method: 'post',
      url,
    };
    const op = Object.assign(postDefault, config);
    return this.request(op);
  }

  // delete 方法
  delete(url, config) {
    const deleteDefault = {
      method: 'delete',
      url,
    };
    const op = Object.assign(deleteDefault, config);
    return this.request(op);
  }
  // head 方法
  head(url, config) {
    const headDefault = {
      method: 'head',
      url,
    };
    const op = Object.assign(headDefault, config);
    return this.request(op);
  }
  // options 方法
  options(url, config) {
    const optionsDefault = {
      method: 'options',
      url,
    };
    const op = Object.assign(optionsDefault, config);
    return this.request(op);
  }
  // put 方法
  put(url, config) {
    const putDefault = {
      method: 'put',
      url,
    };
    const op = Object.assign(putDefault, config);
    return this.request(op);
  }
  // patch 方法
  patch(url, config) {
    const patchDefault = {
      method: 'put',
      url,
    };
    const op = Object.assign(patchDefault, config);
    return this.request(op);
  }
}
module.exports = {
  HttpRequest,
};
