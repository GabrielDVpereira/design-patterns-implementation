export interface HttpRequest {
    body?: any; 
    headers?: any; 
}

export type HttpResponse = {
    statusCode: number
    body: any
  }


export interface Controller {
    handle(httpRequest: HttpRequest): HttpResponse;
}