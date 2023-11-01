export class WsClient {
  private socket: WebSocket | null = null;

  public onMessage?: (message: MessageEvent) => void;

  constructor(private url: string) {}

  public open(): void {
    if (this.socket?.OPEN) return;

    this.socket = new WebSocket(this.url);

    this.socket.onclose = (): void => {
      this.cleanup();
    };

    this.socket.onopen = () => {
      if (this.socket) {
        this.socket.onmessage = (event: MessageEvent) => {
          this.onMessage?.(event);
        };
      }
    };
    console.info('ws opened');
  }

  public close(): void {
    this.socket?.close();
  }

  private cleanup(): void {
    if (this.socket) {
      this.socket.onclose = null;
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket = null;
    }
  }

  public getEventTitle(): string {
    if (this.url.includes('/all')) {
      return 'getAllOrders';
    } else {
      return 'getPersonalOrders';
    }
  }
}
