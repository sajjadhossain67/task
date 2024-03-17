// custom.d.ts for error handling

declare module 'mongoose' {
    interface ConnectOptions {
      useNewUrlParser?: boolean;
      useUnifiedTopology?: boolean;
    }
  }
  