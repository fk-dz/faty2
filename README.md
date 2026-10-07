<div align="center">

<img alt="FATYAK" width="110" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='4' y1='2' x2='60' y2='62' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23F2B457'/%3E%3Cstop offset='.6' stop-color='%23E95420'/%3E%3Cstop offset='1' stop-color='%23C7567F'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='3.5' y='3.5' width='57' height='57' rx='18' fill='%231D1828'/%3E%3Crect x='4.25' y='4.25' width='55.5' height='55.5' rx='17.25' fill='none' stroke='url(%23a)' stroke-width='2'/%3E%3Ccircle cx='32' cy='32' r='24.5' fill='none' stroke='url(%23a)' stroke-width='.9' stroke-dasharray='2.5 7' opacity='.5'/%3E%3Cpath d='M23.5 47.5V17.5h19' stroke='url(%23a)' stroke-width='4.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M23.5 33h12.5' stroke='%23F2B457' stroke-width='4.6' stroke-linecap='round'/%3E%3Ccircle cx='45.5' cy='17.5' r='5.6' fill='none' stroke='%23F2B457' stroke-width='.9' opacity='.45'/%3E%3Ccircle cx='45.5' cy='17.5' r='3.5' fill='%23FF9A4D'/%3E%3C/svg%3E" />

# 🤖 FATY — المساعد الذكي العربي

### مساعد ذكاء اصطناعي مجاني بالكامل — بدون مفتاح API

[![Made with React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-E95420?style=flat-square)](LICENSE)

**تطوير: [FATYAK](#-المطور)**

</div>

---

## ✨ نظرة عامة

**FATY** (فاتي) هو مساعد ذكي يعمل بالذكاء الاصطناعي، مصمم خصيصاً للغة العربية، بواجهة مستوحاة من نظام **Ubuntu**. يعمل بالكامل من المتصفح — **بدون خادم، بدون تسجيل، وبدون مفتاح API**.

## 🎯 الميزات

| الميزة | الوصف |
|-------|-------|
| 💬 **محادثة ذكية** | يفهم العربية ويرد بطلاقة، ويعرف اسمه واسمك |
| 🎤 **التحدث بالميكروفون** | تكلم معه بالعربية وسيفهمك ويرد عليك |
| 🔊 **الرد الصوتي** | يقرأ ردوده بصوت عربي واضح |
| 🖼️ **رفع الصور** | ارفع صورة واسأله عن محتواها |
| 🎨 **توليد الصور** | صف ما تريد وسيولّد لك صورة احترافية |
| 💾 **حفظ المحادثات** | كل محادثاتك محفوظة تلقائياً في متصفحك |
| 🎨 **واجهة Ubuntu** | تصميم أنيق بألوان Ubuntu البرتقالية |
| 📱 **متجاوب** | يعمل على الحاسوب والجوال والتابلت |

## 🚀 التشغيل محلياً

### المتطلبات
- [Node.js](https://nodejs.org/) إصدار 18 أو أحدث
- npm (يأتي مع Node.js)

### الخطوات

```bash
# 1. استنساخ المستودع
git clone https://github.com/USERNAME/faty-assistant.git

# 2. الدخول إلى المجلد
cd faty-assistant

# 3. تثبيت المكتبات
npm install

# 4. التشغيل
npm run dev
```

ثم افتح المتصفح على: **http://localhost:5173**

### البناء للإنتاج

```bash
npm run build
```

سيتم إنشاء ملف واحد في مجلد `dist/index.html` يمكن فتحه مباشرة أو رفعه على أي استضافة.

## 🌐 النشر

المشروع مُعد للنشر التلقائي على **GitHub Pages** عبر GitHub Actions.

**للتفعيل:**
1. ارفع المشروع على GitHub
2. اذهب إلى `Settings` ← `Pages`
3. في `Source` اختر **GitHub Actions**
4. انتهى! سينشر تلقائياً عند كل تحديث

يمكنك أيضاً النشر على:
- **Vercel** — `npx vercel`
- **Netlify** — اسحب مجلد `dist`
- **Cloudflare Pages** — اربط المستودع

## 🛠️ التقنيات المستخدمة

- **React 19** — واجهة المستخدم
- **TypeScript** — أمان الأنواع
- **Vite 7** — أداة البناء السريعة
- **Tailwind CSS 4** — التنسيق
- **Pollinations.ai** — محرك الذكاء الاصطناعي المجاني
- **Web Speech API** — التعرف على الصوت والنطق

## 📂 هيكل المشروع

```
faty/
├── src/
│   ├── components/
│   │   ├── Mark.tsx          # الشعار + المؤشر الحي (Orb)
│   │   ├── ChatArea.tsx      # منطقة المحادثة
│   │   ├── Sidebar.tsx       # الشريط الجانبي
│   │   ├── ImageStudio.tsx   # الاستوديو
│   │   └── Icons.tsx         # الأيقونات
│   ├── utils/
│   │   ├── ai.ts             # الاتصال بالذكاء الاصطناعي
│   │   └── voice.ts          # الصوت والميكروفون
│   ├── App.tsx               # المكوّن الرئيسي + الخلفية
│   ├── main.tsx              # نقطة الدخول
│   └── index.css             # نظام التصميم
├── dist/
│   └── index.html            # ⬅️ الملف الجاهز للنشر (واحد مكتفٍ بذاته)
└── index.html                # مدخل Vite (للتطوير فقط)
```

> 📦 الشعار مرسوم بـ SVG مضمّن — لا توجد أي صور خارجية، لذلك `dist/index.html` يعمل وحده.

## 🎤 المتصفحات المدعومة

| المتصفح | المحادثة | الميكروفون | الصوت |
|---------|:--------:|:----------:|:-----:|
| Chrome  | ✅ | ✅ | ✅ |
| Edge    | ✅ | ✅ | ✅ |
| Safari  | ✅ | ✅ | ✅ |
| Firefox | ✅ | ⚠️ | ✅ |

> ⚠️ Firefox يحتاج تفعيل `dom.webspeech.recognition.enable` من `about:config`

## 👨‍💻 المطور

<div align="center">

### **FATYAK**

مطور تطبيقات الذكاء الاصطناعي

</div>

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT — انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

<div align="center">

صُنع بـ ❤️ بواسطة **FATYAK**

⭐ إذا أعجبك المشروع، لا تنسَ إعطاءه نجمة!

</div>
