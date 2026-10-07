# 🔧 حل مشاكل النشر على GitHub Pages

> إذا كان الرابط لا يعمل، اتبع هذه الخطوات **بالترتيب**. المشكلة في 95% من الحالات هي رقم 1 أو 2.

---

## ✅ 1. تأكد أن مصدر النشر هو "GitHub Actions"

هذه أشهر مشكلة على الإطلاق.

1. افتح مستودعك على GitHub
2. اضغط **Settings** (الإعدادات) ⚙️
3. من القائمة اليسرى اختر **Pages**
4. تحت **Build and deployment** ← **Source**
5. **يجب أن يكون مكتوباً: `GitHub Actions`**

❌ إذا كان مكتوباً `Deploy from a branch` → **غيّره إلى `GitHub Actions`**

> السبب: الكود المصدري (React/TypeScript) لا يعمل مباشرة في المتصفح، يجب بناؤه أولاً.

---

## ✅ 2. تحقق من نجاح عملية البناء

1. اضغط على تبويب **Actions** في أعلى المستودع
2. انظر لآخر عملية تشغيل:

| العلامة | المعنى | ماذا تفعل |
|:------:|-------|----------|
| 🟢 | نجح البناء | الموقع جاهز، انتظر دقيقة |
| 🟡 | قيد التنفيذ | انتظر 1-2 دقيقة |
| 🔴 | فشل | اضغط عليه واقرأ الخطأ (انظر أدناه) |
| ⚪ | لم يبدأ | راجع الخطوة 3 |

### إذا كان أحمر 🔴
اضغط على العملية الفاشلة ← اضغط على `build` ← ستجد الخطوة الحمراء. الأخطاء الشائعة:

| الخطأ | الحل |
|------|------|
| `npm ci can only install with package-lock.json` | ✅ مُصلح — ارفع ملف `deploy.yml` الجديد |
| `Dependencies lock file is not found` | ✅ مُصلح — ارفع ملف `deploy.yml` الجديد |
| `Resource not accessible by integration` | انظر الخطوة 4 |
| `Error: Get Pages site failed` | فعّل Pages أولاً (الخطوة 1) |

---

## ✅ 3. تأكد أن ملف الـ Workflow مرفوع

يجب أن يكون المسار بالضبط:

```
.github/workflows/deploy.yml
```

⚠️ **انتبه:** إذا رفعت الملفات بالسحب والإفلات على موقع GitHub، فإن المجلدات التي تبدأ بنقطة (`.github`) **لا تُرفع أحياناً**!

### الحل: أنشئ الملف يدوياً
1. في المستودع اضغط **Add file** ← **Create new file**
2. في خانة الاسم اكتب بالضبط:
   ```
   .github/workflows/deploy.yml
   ```
   (سيتحول تلقائياً لمجلدات عند كتابة `/`)
3. الصق محتوى ملف `deploy.yml`
4. اضغط **Commit changes**

---

## ✅ 4. فعّل صلاحيات الـ Actions

1. **Settings** ← **Actions** ← **General**
2. انزل إلى **Workflow permissions**
3. اختر **Read and write permissions** ✅
4. اضغط **Save**

---

## ✅ 5. تأكد من اسم الرابط الصحيح

الرابط يجب أن يكون بهذا الشكل بالضبط:

```
https://اسم-حسابك.github.io/اسم-المستودع/
```

### أمثلة
| اسم الحساب | اسم المستودع | الرابط |
|-----------|-------------|--------|
| `fateh` | `faty-assistant` | `https://fateh.github.io/faty-assistant/` |
| `fateh` | `fateh.github.io` | `https://fateh.github.io/` |

⚠️ **لا تنسَ الشرطة المائلة `/` في النهاية!**

> 💡 الرابط الصحيح يظهر دائماً في: **Settings** ← **Pages** في الأعلى بمربع أخضر.

---

## ✅ 6. المستودع يجب أن يكون Public

GitHub Pages **مجاني فقط للمستودعات العامة** (إلا إذا كان لديك حساب Pro).

**Settings** ← انزل لآخر الصفحة ← **Danger Zone** ← **Change visibility** ← **Public**

---

## ✅ 7. امسح الكاش وانتظر

- أول نشر قد يستغرق **5-10 دقائق**
- اضغط `Ctrl + Shift + R` (أو `Cmd + Shift + R` على ماك) لتحديث الصفحة بدون كاش
- جرّب وضع التصفح الخفي (Incognito)

---

## 🔄 إعادة تشغيل النشر يدوياً

1. تبويب **Actions**
2. من اليسار اختر **Deploy FATY to GitHub Pages**
3. اضغط **Run workflow** ← **Run workflow**

---

## 🚀 البديل الأسرع: Netlify (دقيقة واحدة)

إذا أردت نتيجة فورية بدون أي إعدادات:

1. شغّل محلياً: `npm run build`
2. افتح **[app.netlify.com/drop](https://app.netlify.com/drop)**
3. **اسحب مجلد `dist` كاملاً** وأفلته في الصفحة
4. ✅ موقعك جاهز فوراً برابط HTTPS

> ✅ هذه الطريقة تدعم الميكروفون لأنها HTTPS.

---

## 🚀 بديل آخر: Vercel

```bash
npm install -g vercel
vercel
```
اتبع التعليمات واضغط Enter على كل سؤال.

---

## 📋 قائمة فحص سريعة

- [ ] Settings → Pages → Source = **GitHub Actions**
- [ ] تبويب Actions فيه علامة **🟢 خضراء**
- [ ] ملف `.github/workflows/deploy.yml` موجود في المستودع
- [ ] Settings → Actions → **Read and write permissions**
- [ ] المستودع **Public**
- [ ] الرابط ينتهي بـ **`/`**
- [ ] انتظرت **5 دقائق** على الأقل

---

## 🎤 ملاحظة عن الميكروفون

الميكروفون يعمل فقط على:
- ✅ `https://` (GitHub Pages / Netlify / Vercel)
- ✅ `http://localhost`
- ❌ `file:///` (فتح الملف مباشرة) — **لن يعمل الميكروفون**

لذلك لا تفتح `index.html` بالنقر المزدوج إذا أردت استخدام الصوت.

---

<div align="center">

**تطوير: FATYAK**

</div>
