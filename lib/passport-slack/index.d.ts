declare module "passport-slack" {
    export type Callback = (err: Error | null, payload: any) => void;
    export type Handler = (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: Callback
    ) => void;
    export interface Options {
      clientID?: string;
      clientSecret?: string;
    }
    export class Strategy {
      constructor(options: Options, handler: Handler);
    }
  }
  