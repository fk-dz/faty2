<div align="center">

<img src="public/fatyak-logo.png" alt="FATYAK Logo" width="120" />

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
faty-assistant/
├── public/                  # الصور والأصول
│   ├── fatyak-logo.png     # شعار المطور
│   ├── faty-avatar.png     # صورة المساعد
│   └── fateh-avatar.png    # صورة المستخدم
├── src/
│   ├── components/
│   │   ├── ChatArea.tsx        # منطقة المحادثة
│   │   ├── Sidebar.tsx         # الشريط الجانبي
│   │   ├── ImageGenerator.tsx  # مولد الصور
│   │   └── Icons.tsx           # الأيقونات
│   ├── utils/
│   │   ├── ai.ts           # الاتصال بالذكاء الاصطناعي
│   │   └── voice.ts        # الصوت والميكروفون
│   ├── App.tsx             # المكون الرئيسي
│   ├── main.tsx            # نقطة الدخول
│   └── index.css           # التنسيقات
└── index.html
```

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
