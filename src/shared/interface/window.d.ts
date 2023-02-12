// export 안 붙히면 다른 파일에서 인식 못함

export declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    verificationId: any;
    resetReCaptcha: any;
    recaptchaWidgetId: any;
    Kakao: any;
  }
}
