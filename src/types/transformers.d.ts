declare module '@xenova/transformers' {
  export const env: any;
  export function pipeline(
    task: 'automatic-speech-recognition' | string,
    model?: string,
    options?: Record<string, any>
  ): Promise<(input: Blob | ArrayBuffer | string) => Promise<any>>;
}


