export interface BaseService<ReqT, ResT = void> {
  execute(req: ReqT): Promise<ResT> | ResT
}