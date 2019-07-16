export function MockService(Service): any {
  class MockedService extends Service {
    constructor() { super(); }
  }
  return {provide: Service, useClass: MockedService};
}

export function MockedServiceInstance(Service): any {
  const config = MockService(Service);
  return new (config.useClass)();
}
