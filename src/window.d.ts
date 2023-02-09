// export 안 붙히면 다른 파일에서 인식 못함

export declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: unknown;
  }
}
