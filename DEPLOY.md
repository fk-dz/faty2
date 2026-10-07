# 🚀 نشر FATY

الملف الجاهز للنشر هو **`dist/index.html`** — ملف واحد يحتوي كل شيء (HTML + CSS + JS + الشعار SVG).
لا يحتاج أي ملفات أخرى ولا مجلد `public`.

---

## ⚡ الطريقة الأولى — GitHub Pages (ملف واحد)

### 1. أنشئ مستودعاً جديداً
`New repository` ← اسم مثلاً `faty` ← **Public** ← أنشئ مستودعاً فارغاً.

### 2. ارفع ملفاً واحداً فقط
- افتح مجلد `dist` في مشروعك
- **Add file** ← **Upload files**
- اسحب **`dist/index.html`** وحده (وملف `.nojekyll` إن وُجد)
- **Commit changes**

> ⚠️ لا ترفع ملف `index.html` الموجود في **جذر** المشروع — ذلك ملف تطوير يستدعي TypeScript
> ولن يعمل في المتصفح (سيظهر صفحة بيضاء).

### 3. فعّل Pages
**Settings** ⚙️ ← **Pages** ←
- **Source** = `Deploy from a branch`
- **Branch** = `main` — **Folder** = `/(root)`
- **Save**

### 4. انتظر دقيقتين ثم افتح
```
https://اسمك.github.io/faty/
```
الرابط الصحيح يظهر دائماً في مربع أخضر 🟩 أعلى نفس الصفحة.

---

## 🌐 الطريقة الثانية — Netlify Drop (30 ثانية، بدون حساب)

1. افتح **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. اسحب مجلد **`dist`** كاملاً وأفلته
3. ✅ رابط `https` جاهز فوراً — والميكروفون يعمل

---

## 🌐 الطريقة الثالثة — Vercel

```bash
npm i -g vercel
vercel --prod
```

---

## 💻 التطوير محلياً

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # يُنتج dist/index.html
```

---

## 🎤 الميكروفون

| العنوان | الميكروفون |
|---------|:---------:|
| `https://…github.io/…` | ✅ |
| `https://…netlify.app` | ✅ |
| `http://localhost` | ✅ |
| `file:///…` (نقر مزدوج) | ❌ |

المتصفحات المدعومة: **Chrome** و **Edge** و **Safari**.

---

## 📋 فحص سريع عند الصفحة البيضاء

- [ ] رفعت **`dist/index.html`** وليس `index.html` الجذر
- [ ] Branch = `main` و Folder = `/(root)`
- [ ] المستودع **Public**
- [ ] انتظرت دقيقتين + `Ctrl + Shift + R`
- [ ] فتحت **Console** (F12) وقرأت أول خطأ أحمر

---

<div align="center">

**FATYAK**

</div>
