if (!window.Response) {
  class ResponseMock {
    constructor(private body, private init) {}
    get status() { return this.init.status || undefined; }
    get statusText() { return this.init.statusText || ''; }
    get headers() { return this.init.headers || new Map<string, string>() }
    get ok() { return this.status() >= 200 && this.status < 300; }
    get redirected() { return !!this.init.redirected; }
    get type() { return this.init.type || 'basic'; }
    get url() { return this.init.url || ''; }
    get blob() { return () => Promise.resolve(new Blob(this.body)); }
    get text() { return () => Promise.resolve(this.body); }
    get json() { return () => Promise.resolve(JSON.parse(this.body)); }
  }
  (window as any).Response = ResponseMock;
}
