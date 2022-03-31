interface Handler {
    setNext(handler: Handler): void
    handle(request: IRequest): void
}

interface IRequest {
    user?: Record<string, any>
    credit: number
    permission: 'admin' | 'standart'
}

