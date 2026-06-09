// ============================================================
// config.js — FitEvolution
// ATENÇÃO: adicione este arquivo ao .gitignore (não comitar).
// Ele é carregado pelo HTML, mas NÃO faz parte do código-fonte
// versionado. A proteção real está nas regras do Firestore e
// na restrição de domínio (veja instruções).
// ============================================================
window.FE_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAuCfB9JJTYrx-C6g-RwsilPJypGnT5gNo",
    authDomain: "fitevolution-7d1fe.firebaseapp.com",
    projectId: "fitevolution-7d1fe",
    storageBucket: "fitevolution-7d1fe.firebasestorage.app",
    messagingSenderId: "450074593458",
    appId: "1:450074593458:web:0f8d8e183d80bb950221ab"
  },
  emailjs: {
    publicKey: "i2x3-adJoi8fHLg3x",
    serviceId: "service_lly1gb8",
    templateBoasVindas: "template_6wimgmc",
    // TODO: crie o template de redefinição de senha no EmailJS e cole o ID aqui
    templateReset: "TODO_TEMPLATE_RESET"
  }
  // A PRIVATE KEY do EmailJS NÃO entra aqui — ela é só para chamadas
  // de servidor (REST/Cloud Functions), nunca no navegador.
};
