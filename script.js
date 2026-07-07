/* ==========================================================================
   AL NOOR SOLAR PANELS FACTORY  - INTERACTIVE JS CONTROLLER
   ========================================================================== */

// Translation Dictionary
const translations = {
    ar: {
        // Logo & Brand
        "logo-title-text": "النور <span>للألواح </span> الشمسية ",
        "logo-subtitle-text": "",

        // Navigation
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-quality": "التقنية والجودة",
        "nav-products": "منتجاتنا",
        "nav-projects": "مشاريعنا",
        "nav-contact": "اتصل بنا",
        "nav-cta": "احصل على تسعيرة",

        // Hero Section
        "hero-badge-span": "صناعة وطنية رائدة",
        "hero-title": "طاقة مستدامة... <span>بجودة صناعية موثوقة</span>",
        "hero-desc": "مصنع النور للألواح الشمسية  يقدم أحدث حلول الطاقة المتجددة المصممة لتحمل أصعب الظروف البيئية بكفاءة عالية وضمان طويل الأمد.",
        "hero-cta": "اكتشف منتجاتنا",
        "hero-sec-cta": "طلب استشارة مجانية",

        // Hero Stats
        "stat-capacity-val": "250+ <span>ميجا</span>",
        "stat-capacity-lbl": "الطاقة الإنتاجية السنوية",
        "stat-efficiency-val": "23.8% <span>كفاءة</span>",
        "stat-efficiency-lbl": "أعلى كفاءة خلايا شمسية",
        "stat-warranty-val": "30 <span>سنة</span>",
        "stat-warranty-lbl": "ضمان الأداء التشغيلي",

        // About Section
        "about-badge": "من نحن",
        "about-title": "رواد توطين تقنيات الطاقة الشمسية",
        "about-desc-1": "تأسس مصنع النور للألواح الشمسية ليكون الركيزة الأساسية للتحول نحو الطاقة النظيفة في المنطقة. نحن نوفر أحدث تقنيات التصنيع المؤتمتة بالكامل لإنتاج خلايا وألواح شمسية عالية الجودة تتطابق مع المعايير الدولية.",
        "about-desc-2": "رؤيتنا تكمن في تقديم طاقة نظيفة ومستدامة وبأسعار تنافسية تمكن القطاعات السكنية والصناعية والحكومية من تحقيق الاكتفاء الذاتي من الطاقة وتقليل الانبعاثات الكربونية.",
        "about-exp-num": "15+",
        "about-exp-txt": "عاماً من الخبرة الهندسية",

        // About Features
        "feat-1-title": "تصنيع مؤتمت بالكامل",
        "feat-1-desc": "خطوط إنتاج روبوتية متطورة تضمن دقة التصنيع وتمنع الخطأ البشري في تجميع الألواح.",
        "feat-2-title": "مقاومة الظروف القاسية",
        "feat-2-desc": "ألواح مصممة لمقاومة الغبار، درجات الحرارة المرتفعة، والرياح الشديدة بفضل طلاءات نانوية واقية.",
        "feat-3-title": "مطابقة المعايير الأوروبية",
        "feat-3-desc": "جميع منتجاتنا حاصلة على شهادات الجودة العالمية مثل TUV وIEC لضمان أقصى درجات الأمان.",

        // Quality Section
        "quality-badge": "مختبر الجودة والتحليل",
        "quality-title": "تقنية الفحص المجهري الضوئي (EL Testing)",
        "quality-desc": "التقنية الأهم لضمان سلامة الألواح. نقوم بتصوير الخلايا داخلياً باستخدام كاميرات فحص التلألؤ الكهربائي عالية الدقة لرصد أي تشققات مجهرية غير مرئية بالعين المجردة قبل طرح المنتج في السوق.",
        "step-1-title": "اختبار التلألؤ الكهربائي (EL)",
        "step-1-desc": "تمرير تيار عكسي في اللوح ليصدر ضوءاً غير مرئي يكشف سلامة السيليكون بنسبة 100%.",
        "step-2-title": "اختبار المحاكاة الشمسية (Flash Test)",
        "step-2-desc": "قياس دقيق للقدرة الكهربائية الفعلية للوح تحت ظروف معيارية مطابقة للشمس الحقيقية.",
        "step-3-title": "اختبار العزل الحراري والرطوبة",
        "step-3-desc": "تعريض الألواح لدرجات حرارة ورطوبة قصوى للتأكد من متانة المواد اللاصقة ومقاومة التآكل.",

        // EL Simulator
        "sim-title": "محاكي فحص التلألؤ الكهربائي (EL Tester)",
        "sim-btn-start": "تشغيل الفحص المجهري (EL)",
        "sim-btn-reset": "العودة للوضع الطبيعي",
        "sim-status-idle": "حالة اللوح: بانتظار الفحص",
        "sim-status-active": "يتم الفحص... تم رصد تشققات مجهرية بالخلايا!",

        // Products Section
        "prod-badge": "خطوط الإنتاج",
        "prod-title": "ألواح شمسية عالية الأداء",
        "prod-desc": "نقدم ثلاثة فئات رئيسية تلبي متطلبات المشاريع المختلفة من الاستخدام المنزلي الصغير إلى محطات الطاقة الكبرى.",

        "prod-1-badge": "الأكثر مبيعاً",
        "prod-1-name": "لوح النور Monocrystalline",
        "prod-1-desc": "لوح أحادي البلورة عالي الكفاءة، مصمم للأسطح السكنية والمساحات المحدودة التي تتطلب أعلى إنتاجية طاقة.",
        "prod-1-spec-w-val": "580 واط",
        "prod-1-spec-e-val": "22.5%",
        "prod-1-spec-t-val": "أحادي",

        "prod-2-badge": "للمشاريع الكبرى",
        "prod-2-name": "لوح النور Bifacial (ثنائي الوجه)",
        "prod-2-desc": "يمتص الضوء من الجانبين الأمامي والخلفي للاستفادة من انعكاس الأرض (Albedo)، مما يزيد الإنتاجية بنسبة تصل لـ 25%.",
        "prod-2-spec-w-val": "670 واط",
        "prod-2-spec-e-val": "23.0%",
        "prod-2-spec-t-val": "ثنائي الوجه",

        "prod-3-badge": "الجيل الذكي",
        "prod-3-name": "لوح النور Smart PV",
        "prod-3-desc": "مزود بمحسنات طاقة وميكروإنفرتر مدمج للمراقبة الفردية لكل لوح وحماية تلقائية من تقلبات الجهد الكهربائي.",
        "prod-3-spec-w-val": "600 واط",
        "prod-3-spec-e-val": "23.8%",
        "prod-3-spec-t-val": "ذكي مدمج",

        "prod-btn-sheet": "تحميل ورقة البيانات الفنية (Datasheet)",

        // Projects Section
        "proj-badge": "شركاء النجاح",
        "proj-title": "مشاريع تفخر بألواح النور",
        "proj-filter-all": "الكل",
        "proj-filter-utility": "محطات طاقة",
        "proj-filter-commercial": "تجاري وصناعي",

        "proj-1-title": "محطة النور الكبرى للطاقة",
        "proj-1-cat": "محطات طاقة",
        "proj-1-desc": "قدرة 50 ميجاواط - توفير الطاقة لأكثر من 15,000 منزل.",

        "proj-2-title": "سقف مجمع الأعمال الذكي",
        "proj-2-cat": "تجاري وصناعي",
        "proj-2-desc": "قدرة 2 ميجاواط - تغطية 80% من احتياجات المجمع الإداري.",

        // Contact & Calculator
        "calc-title": "احسب احتياجك الكهربائي التقديري",
        "calc-desc": "اختر نوع اللوح وحدد المساحة أو الكمية لحساب الطاقة الإجمالية المتوقع إنتاجها سنوياً.",
        "calc-lbl-type": "اختر فئة اللوح الشمسية:",
        "calc-lbl-qty": "كمية الألواح المطلوبة (عدد الألواح):",
        "calc-res-title": "النتائج التقديرية للحساب:",
        "calc-res-cap": "إجمالي القدرة المركبة:",
        "calc-res-gen": "الإنتاج السنوي المتوقع:",
        "calc-res-area": "المساحة التقريبية المطلوبة:",
        "calc-res-cost": "التكلفة التقديرية للمشروع:",
        "calc-res-savings": "الوفر المالي السنوي المتوقع:",
        "calc-res-payback": "فترة استرداد التكلفة (الجدوى):",
        "calc-res-cost-val": "احسب لمعرفة السعر",

        "contact-badge": "تواصل معنا",
        "contact-title": "ابدأ رحلة التحول نحو الطاقة النظيفة اليوم",
        "info-card-1-title": "موقع المصنع الرئيسي",
        "info-card-1-desc": "مجمع العتبة العباسية الصناعي ، كربلاء ، العراق",
        "info-card-2-title": "المبيعات والدعم الفني",
        "info-card-2-desc": "sales@alnoorsolar.com<br>+964 12 345 6789",

        "form-title": "طلب استشارة وعرض أسعار فني",
        "form-lbl-name": "الاسم الكامل / اسم الشركة:",
        "form-lbl-email": "البريد الإلكتروني:",
        "form-lbl-phone": "رقم الجوال:",
        "form-lbl-msg": "تفاصيل المشروع وموقع التركيب:",
        "form-btn-submit": "إرسال طلب التسعيرة الفنية",

        "form-holder-name": "مثال: شركة المقاولات الحديثة",
        "form-holder-email": "example@domain.com",
        "form-holder-phone": "+964 50 000 0000",
        "form-holder-msg": "يرجى كتابة مساحة السطح المتاحة أو القدرة المطلوبة بالكيلوواط...",

        // Footer & Copyright
        "footer-desc": "مصنع وطني متخصص في إنتاج وتوطين تقنيات الخلايا والألواح الكهروضوئية عالية الكفاءة بأحدث التقنيات الألمانية والأوروبية.",
        "footer-col-links": "روابط سريعة",
        "footer-col-contact": "تواصل معنا مباشرة",
        "footer-contact-addr": "مجمع العتبة العباسية الصناعي ، كربلاء ، العراق",
        "footer-copyright": "&copy; 2026 مصنع النور للألواح الشمسية. جميع الحقوق محفوظة لـ .",

        // Modal / Datasheet details
        "modal-title-spec": "ورقة البيانات الفنية الرسمية - Al Noor Solar",
        "modal-close": "إغلاق",
        "modal-print": "طباعة ومشاركة PDF",

        // Form Success Popup
        "success-title": "تم استلام طلبك بنجاح!",
        "success-msg": "نشكرك على اهتمامك بمنتجات مصنع النور. سيقوم أحد مهندسي المبيعات لدينا بالاتصال بك في أقرب وقت لمراجعة تفاصيل المشروع وتقديم العرض الفني والمالي.",
        "success-btn": "حسناً",

        // Quality Certifications
        "cert-badge": "الاعتمادات والجودة",
        "cert-title": "شهادات الاعتماد والجودة العالمية",
        "cert-desc": "جميع ألواحنا الشمسية معتمدة ومطابقة لأعلى المواصفات واللوائح الفنية المحلية والدولية لضمان سلامة الشبكة وكفاءة الأداء.",
        "cert-1-desc": "الشهادة العالمية الأهم لاختبار تصميم الألواح ومقاومتها للأحمال الميكانيكية والحرارية والأمان الكهربائي.",
        "cert-2-desc": "شهادة نظام إدارة الجودة الدولية في التصنيع لضمان اتساق جودة المنتج وخلو خطوط التجميع من العيوب.",
        "cert-3-desc": "توافق تام مع معايير السلامة والصحة وحماية البيئة الخاصة بدول الاتحاد الأوروبي لتصدير ألواحنا عالمياً.",
        "cert-4-desc": "مطابقة كاملة لمتطلبات الربط بالشبكة الكهربائية العراقية واللوائح الفنية لهيئة السيطرة النوعية والتقييس.",

        // FAQ
        "faq-badge": "الأسئلة الشائعة",
        "faq-title": "أسئلة شائعة حول ألواح النور",
        "faq-desc": "إليك كافة الإجابات الفنية والتشغيلية التي قد تحتاج لمعرفتها عن أنظمتنا الكهروضوئية.",
        "faq-q1": "كيف تتلاءم ألواح النور مع درجات الحرارة المرتفعة والغبار؟",
        "faq-a1": "تم طلاء ألواح النور بطبقة نانوية واقية من الغبار والماء (Hydrophobic Coating) تقلل من تراكم الأتربة. كما أنها تمتاز بمعامل حراري منخفض جداً (-0.34%/درجة مئوية) مما يحافظ على كفاءة توليد الطاقة حتى في حرارة الصيف القصوى.",
        "faq-q2": "ما هي مدة الضمان وما الذي يغطيه بالضبط؟",
        "faq-a2": "نمنح ضماناً مصنعياً شاملاً لمدة 12 سنة على المواد وعيوب التصنيع، وضمان أداء تشغيلي خطي لمدة 30 سنة يضمن عدم انخفاض كفاءة اللوح عن 87.4% من قدرته الاسمية عند السنة الثلاثين.",
        "faq-q3": "هل يمكن ربط ألواحكم مع أنظمة بطاريات الخزن؟",
        "faq-a3": "نعم، جميع ألواحنا متوافقة تماماً مع كافة أنواع العواكس الهجينة (Hybrid Inverters) والمستقلة (Off-Grid) كـ Deye و Growatt وعواكس Enphase الذكية، وتعمل بسلاسة مع بطاريات الليثيوم والأسيد.",
        "faq-q4": "هل ألواحكم مهيأة لمشاريع صافي القياس (Net Metering)؟",
        "faq-a4": "نعم، تم تصميم ألواحنا واختبارها لتتوافق مع اللوائح الوطنية ومعايير الربط بشبكات التوزيع المحلية، مما يتيح لك تصدير الطاقة الفائضة للشبكة وتقليل فواتيرك بشكل قانوني وآمن."
    },
    en: {
        // Logo & Brand
        "logo-title-text": "Al Noor <span>Solar</span> Panels",
        "logo-subtitle-text": "Al Noor Lab",

        // Navigation
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-quality": "Tech & Quality",
        "nav-products": "Products",
        "nav-projects": "Projects",
        "nav-contact": "Contact Us",
        "nav-cta": "Get a Quote",

        // Hero Section
        "hero-badge-span": "Leading National Industry",
        "hero-title": "Sustainable Energy... <span>Trusted Industrial Quality</span>",
        "hero-desc": "Al Noor Solar Panels Factory  delivers state-of-the-art photovoltaic solutions engineered to withstand extreme environmental conditions with peak efficiency and long-term warranties.",
        "hero-cta": "Explore Products",
        "hero-sec-cta": "Free Consultation",

        // Hero Stats
        "stat-capacity-val": "250+ <span>MW</span>",
        "stat-capacity-lbl": "Annual Production Capacity",
        "stat-efficiency-val": "23.8% <span>Eff.</span>",
        "stat-efficiency-lbl": "Peak Solar Cell Efficiency",
        "stat-warranty-val": "30 <span>Years</span>",
        "stat-warranty-lbl": "Linear Power Warranty",

        // About Section
        "about-badge": "About Us",
        "about-title": "Pioneering Local Solar Manufacturing",
        "about-desc-1": "Al Noor Solar Panels Factory was established to be the cornerstone of clean energy transformation in the region. We provide fully automated, advanced manufacturing lines producing high-efficiency solar modules that strictly match international standards.",
        "about-desc-2": "Our vision is to provide clean, sustainable, and competitively priced energy solutions that empower residential, commercial, and government sectors to achieve energy independence and reduce carbon footprints.",
        "about-exp-num": "15+",
        "about-exp-txt": "Years of Engineering Expertise",

        // About Features
        "feat-1-title": "Fully Automated Assembly",
        "feat-1-desc": "State-of-the-art robotic production lines guarantee structural precision and prevent human errors in module assembly.",
        "feat-2-title": "Extreme Weather Resistance",
        "feat-2-desc": "Panels engineered to resist dust accumulation, extreme desert heat, and high winds using advanced nano-coatings.",
        "feat-3-title": "European Standards Compliance",
        "feat-3-desc": "All of our products are certified by international testing authorities including TUV and IEC for maximum safety.",

        // Quality Section
        "quality-badge": "Quality & Testing Laboratory",
        "quality-title": "Electroluminescence (EL) Defect Testing",
        "quality-desc": "The most critical step in ensuring solar module integrity. We photograph every cell internally using high-resolution EL testing cameras to detect microscopic, deep-silicon cracks invisible to the naked eye before panels enter the market.",
        "step-1-title": "Electroluminescence (EL) Scan",
        "step-1-desc": "Passing a reverse current through the module to emit non-visible light, scanning and verifying 100% cell integrity.",
        "step-2-title": "Solar Simulator (Flash Test)",
        "step-2-desc": "Precise verification of actual electrical power outputs under Standard Test Conditions (STC) matching real sunlight.",
        "step-3-title": "Thermal & Damp Testing",
        "step-3-desc": "Subjecting panels to extreme temperature and humidity cycles to verify adhesive durability and corrosion resistance.",

        // EL Simulator
        "sim-title": "EL Scan Inspection Simulator",
        "sim-btn-start": "Activate EL Microscopic Scan",
        "sim-btn-reset": "Reset to Normal View",
        "sim-status-idle": "Panel Status: Awaiting Inspection",
        "sim-status-active": "Scan active... Microscopic cracks detected in cells!",

        // Products Section
        "prod-badge": "Production Lines",
        "prod-title": "High-Efficiency Solar Modules",
        "prod-desc": "We manufacture three specialized product lines designed to satisfy different project requirements, from small residential systems to utility-scale plants.",

        "prod-1-badge": "Best Seller",
        "prod-1-name": "Al Noor Monocrystalline Panel",
        "prod-1-desc": "High-efficiency single-crystal panel designed for residential roofs and tight spaces demanding maximum power density.",
        "prod-1-spec-w-val": "580 W",
        "prod-1-spec-e-val": "22.5%",
        "prod-1-spec-t-val": "Mono-PERC",

        "prod-2-badge": "Utility Scale",
        "prod-2-name": "Al Noor Bifacial Solar Panel",
        "prod-2-desc": "Absorbs sunlight from both front and rear sides by utilizing ground reflection (Albedo), boosting annual generation by up to 25%.",
        "prod-2-spec-w-val": "670 W",
        "prod-2-spec-e-val": "23.0%",
        "prod-2-spec-t-val": "Bifacial Glass-Glass",

        "prod-3-badge": "Smart Generation",
        "prod-3-name": "Al Noor Smart PV Panel",
        "prod-3-desc": "Equipped with integrated power optimizers and a microinverter for real-time monitoring of each module and surge protection.",
        "prod-3-spec-w-val": "600 W",
        "prod-3-spec-e-val": "23.8%",
        "prod-3-spec-t-val": "Smart Inverter Inside",

        "prod-btn-sheet": "Download Technical Datasheet (PDF)",

        // Projects Section
        "proj-badge": "Partners in Success",
        "proj-title": "Projects Powered by Al Noor Panels",
        "proj-filter-all": "All Projects",
        "proj-filter-utility": "Utility Scale",
        "proj-filter-commercial": "Commercial & Industrial",

        "proj-1-title": "Al Noor Megawatt Solar Park",
        "proj-1-cat": "Utility Scale",
        "proj-1-desc": "50 MW capacity - delivering clean power to more than 15,000 homes.",

        "proj-2-title": "Smart Business Hub Rooftop",
        "proj-2-cat": "Commercial & Industrial",
        "proj-2-desc": "2 MW capacity - offsets 80% of the administration campus consumption.",

        // Contact & Calculator
        "calc-title": "Estimate Your Solar Generation Capacity",
        "calc-desc": "Choose a panel model and enter the quantity to calculate total capacity, required area, and estimated energy yields.",
        "calc-lbl-type": "Select Solar Panel Type:",
        "calc-lbl-qty": "Quantity of Solar Panels Required:",
        "calc-res-title": "Estimated Calculations:",
        "calc-res-cap": "Total Installed Capacity:",
        "calc-res-gen": "Est. Annual Generation:",
        "calc-res-area": "Required Installation Area:",
        "calc-res-cost": "Estimated System Cost:",
        "calc-res-savings": "Est. Annual Energy Savings:",
        "calc-res-payback": "Payback Period (Payback):",
        "calc-res-cost-val": "Calculate to see price",

        "contact-badge": "Contact Us",
        "contact-title": "Start Your Clean Energy Transition Today",
        "info-card-1-title": "Headquarters & Factory",
        "info-card-1-desc": "3rd Industrial Area, Jeddah, Kingdom of Saudi Arabia",
        "info-card-2-title": "Sales & Support Desk",
        "info-card-2-desc": "sales@alnoorsolar.com<br>+964 12 345 6789",

        "form-title": "Request Consultancy & Quote",
        "form-lbl-name": "Full Name / Company Name:",
        "form-lbl-email": "Email Address:",
        "form-lbl-phone": "Phone Number:",
        "form-lbl-msg": "Project Details & Location:",
        "form-btn-submit": "Submit RFP Request",

        "form-holder-name": "e.g., Modern Contracting Ltd.",
        "form-holder-email": "example@domain.com",
        "form-holder-phone": "+964 50 000 0000",
        "form-holder-msg": "Please specify available rooftop area or desired power output in kW...",

        // Footer & Copyright
        "footer-desc": "A leading national facility specializing in the manufacturing and localization of high-efficiency photovoltaic cells and modules using cutting-edge European automated lines.",
        "footer-col-links": "Quick Links",
        "footer-col-contact": "Contact Directly",
        "footer-contact-addr": "Industrial Area, Jeddah, Saudi Arabia",
        "footer-copyright": "&copy; 2026 Al Noor Solar Panels Factory. All rights reserved.",

        // Modal / Datasheet details
        "modal-title-spec": "Official Technical Datasheet - Al Noor Solar",
        "modal-close": "Close",
        "modal-print": "Print & Share PDF",

        // Form Success Popup
        "success-title": "RFP Submitted Successfully!",
        "success-msg": "Thank you for contacting Al Noor Solar. One of our sales engineers will contact you shortly to review your requirements and provide a detailed technical and commercial proposal.",
        "success-btn": "Close",

        // Quality Certifications
        "cert-badge": "Quality & Certifications",
        "cert-title": "Global Certifications & Standards",
        "cert-desc": "All our solar panels are certified and comply with the highest local and international technical standards for grid safety and efficiency.",
        "cert-1-desc": "The most important global certification testing module design, mechanical load resistance, thermal cycles, and electrical safety.",
        "cert-2-desc": "International Standard for Quality Management Systems in manufacturing, ensuring product consistency and defect-free assembly lines.",
        "cert-3-desc": "Full compliance with safety, health, and environmental protection standards of the European Economic Area for global export.",
        "cert-4-desc": "Full compatibility with the Iraqi national grid connection standards and regulatory requirements of the Central Organization for Standardization and Quality Control.",

        // FAQ
        "faq-badge": "FAQ",
        "faq-title": "Frequently Asked Questions",
        "faq-desc": "Find answers to common technical and operational questions about our solar photovoltaic systems.",
        "faq-q1": "How do Al Noor panels perform under high temperatures and dust?",
        "faq-a1": "Al Noor panels feature a hydrophobic nano-coating that minimizes dust build-up. They also possess an ultra-low temperature coefficient of -0.34%/°C, maintaining peak generation capacity even in extreme summer heat.",
        "faq-q2": "What is the warranty period and what does it cover?",
        "faq-a2": "We provide a 12-year comprehensive product warranty on materials and workmanship, and a 30-year linear performance warranty guaranteeing at least 87.4% nominal power output at year 30.",
        "faq-q3": "Can the panels be integrated with battery storage systems?",
        "faq-a3": "Yes, all our panels are fully compatible with modern hybrid and off-grid inverters (like Deye, Growatt, and Enphase Smart Inverters) and work seamlessly with lithium and lead-acid battery banks.",
        "faq-q4": "Are the panels compliant with Net Metering grid codes?",
        "faq-a4": "Yes, Al Noor modules are tested and compliant with national grid codes and local distribution regulations, allowing you to feed surplus solar energy back to the grid safely under Net Metering programs."
    }
};

// Global App State
let currentLang = "ar"; // Default to Arabic

// Elements cache
const els = {
    langBtn: document.getElementById("lang-toggle-btn"),
    menuToggle: document.getElementById("mobile-menu-toggle"),
    navbar: document.getElementById("main-nav"),
    calculator: {
        type: document.getElementById("calc-panel-type"),
        qty: document.getElementById("calc-panel-qty"),
        cap: document.getElementById("calc-val-capacity"),
        gen: document.getElementById("calc-val-generation"),
        area: document.getElementById("calc-val-area"),
        cost: document.getElementById("calc-val-cost"),
        savings: document.getElementById("calc-val-savings"),
        payback: document.getElementById("calc-val-payback")
    },
    elSim: {
        container: document.getElementById("interactive-el-sim"),
        btnStart: document.getElementById("el-start-btn"),
        btnReset: document.getElementById("el-reset-btn"),
        statusTxt: document.getElementById("el-status-text"),
        statusLight: document.getElementById("el-status-light-text")
    },
    contactForm: document.getElementById("rfp-contact-form"),
    modal: document.getElementById("shared-modal"),
    modalTitle: document.getElementById("modal-title"),
    modalBody: document.getElementById("modal-body"),
    modalCloseBtn: document.getElementById("modal-close-btn"),
    modalActionBtn: document.getElementById("modal-action-btn"),
    projectFilters: document.querySelectorAll(".filter-btn"),
    projectCards: document.querySelectorAll(".project-card")
};

// 1. Language Toggle Mechanism
function initLanguage() {
    // Check local storage or set default
    const savedLang = localStorage.getItem("alnoor_lang");
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
        currentLang = savedLang;
    } else {
        currentLang = "ar";
    }
    applyLanguage(currentLang);

    if (els.langBtn) {
        els.langBtn.addEventListener("click", () => {
            currentLang = currentLang === "ar" ? "en" : "ar";
            localStorage.setItem("alnoor_lang", currentLang);
            applyLanguage(currentLang);

            // Recalculate quote if inputs contain values
            calculateQuote();
        });
    }
}

function applyLanguage(lang) {
    // Update HTML attribute and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Update active button text
    if (els.langBtn) {
        els.langBtn.textContent = lang === "ar" ? "English" : "العربية";
    }

    // Select all elements with data-i18n attribute
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Select all elements with data-i18n-placeholder attribute
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Specific adjustments for directional styles
    adjustDirectionalLayout(lang);
}

function adjustDirectionalLayout(lang) {
    // Modify CSS grid orders or specific alignments if needed
    const aboutExp = document.querySelector(".about-experience");
    if (aboutExp) {
        if (lang === "en") {
            aboutExp.style.right = "auto";
            aboutExp.style.left = "-20px";
        } else {
            aboutExp.style.left = "auto";
            aboutExp.style.right = "-20px";
        }
    }
}

// 2. Interactive EL Tester Simulator
function initElSimulator() {
    if (!els.elSim.btnStart) return;

    els.elSim.btnStart.addEventListener("click", () => {
        els.elSim.container.classList.add("scan-active");

        // Update statuses to scanning
        const scanningText = currentLang === "ar" ? "جاري الفحص المجهري بالخلايا..." : "Scanning micro-crack structures...";
        els.elSim.statusTxt.textContent = scanningText;

        // After 1.8 seconds simulate detection
        setTimeout(() => {
            if (els.elSim.container.classList.contains("scan-active")) {
                const detectedText = currentLang === "ar"
                    ? "فحص نشط: تم رصد شروخ مجهرية بالسيليكون!"
                    : "Scan Active: Silicon micro-cracks detected!";

                const lightText = currentLang === "ar" ? "فحص سلبي (تنبيه)" : "Defect Detected (Warning)";

                els.elSim.statusTxt.textContent = detectedText;
                els.elSim.statusLight.textContent = lightText;
            }
        }, 1800);
    });

    els.elSim.btnReset.addEventListener("click", () => {
        els.elSim.container.classList.remove("scan-active");

        const idleText = currentLang === "ar" ? "حالة اللوح: بانتظار الفحص" : "Panel Status: Awaiting Inspection";
        const lightText = currentLang === "ar" ? "سليم (جاهز)" : "Optimal (Ready)";

        els.elSim.statusTxt.textContent = idleText;
        els.elSim.statusLight.textContent = lightText;
    });
}

// 3. Solar Generation Calculator
const panelSpecs = {
    mono: { watts: 580, area: 2.58, cost: 850000 }, // Wattage, area sq.m, estimated cost per panel IQD (includes inverter/battery share)
    bifacial: { watts: 670, area: 3.1, cost: 950000 },
    smart: { watts: 600, area: 2.7, cost: 1100000 }
};

function initCalculator() {
    if (!els.calculator.type) return;

    els.calculator.type.addEventListener("change", calculateQuote);
    els.calculator.qty.addEventListener("input", calculateQuote);

    // Initial calc
    calculateQuote();
}

function calculateQuote() {
    if (!els.calculator.type || !els.calculator.qty) return;

    const type = els.calculator.type.value;
    const qty = parseInt(els.calculator.qty.value) || 0;

    const currency = currentLang === 'ar' ? 'د.ع' : 'IQD';

    if (qty <= 0) {
        els.calculator.cap.textContent = "0 kW";
        els.calculator.gen.textContent = "0 kWh";
        els.calculator.area.textContent = "0 m²";
        els.calculator.cost.textContent = translations[currentLang]["calc-res-cost-val"];
        els.calculator.savings.textContent = `0 ${currency}`;
        els.calculator.payback.textContent = "-";
        return;
    }

    const spec = panelSpecs[type];

    // Calculated values
    const capacityKW = (spec.watts * qty) / 1000;
    // Average 5.2 peak sun hours per day in Iraq
    const annualGenerationKWh = capacityKW * 5.2 * 365;
    const totalAreaM2 = spec.area * qty;
    const totalCost = spec.cost * qty;

    // Financial ROI calculations
    // Blended rate (generator + grid) in Iraq is estimated at 150 IQD per kWh
    const annualSavings = annualGenerationKWh * 150;
    const paybackYears = annualSavings > 0 ? (totalCost / annualSavings) : 0;

    // Format values nicely
    els.calculator.cap.textContent = `${capacityKW.toFixed(2)} ${currentLang === 'ar' ? 'ك.و' : 'kW'}`;
    els.calculator.gen.textContent = `${Math.round(annualGenerationKWh).toLocaleString()} ${currentLang === 'ar' ? 'ك.و.س' : 'kWh'}`;
    els.calculator.area.textContent = `${totalAreaM2.toFixed(1)} ${currentLang === 'ar' ? 'متر مربع' : 'm²'}`;
    els.calculator.cost.textContent = `${totalCost.toLocaleString()} ${currency}`;
    els.calculator.savings.textContent = `${Math.round(annualSavings).toLocaleString()} ${currency}`;
    
    if (paybackYears > 0) {
        els.calculator.payback.textContent = `${paybackYears.toFixed(1)} ${currentLang === 'ar' ? 'سنوات' : 'Years'}`;
    } else {
        els.calculator.payback.textContent = "-";
    }
}

// 4. Datasheet simulated viewer/modal
const technicalDatasheets = {
    mono: {
        title: "Al Noor Monocrystalline Panel - 580W Specs",
        specs: [
            { label: "Nominal Power (Pmax)", val: "580 W" },
            { label: "Cell Efficiency", val: "22.5%" },
            { label: "Open Circuit Voltage (Voc)", val: "51.8 V" },
            { label: "Short Circuit Current (Isc)", val: "14.1 A" },
            { label: "Dimensions", val: "2278 x 1134 x 35 mm" },
            { label: "Weight", val: "28.5 kg" },
            { label: "Max System Voltage", val: "1500V DC" },
            { label: "Performance Warranty", val: "25 Years Linear (84.8%)" }
        ],
        specsAr: [
            { label: "القدرة الاسمية القصوى (Pmax)", val: "580 واط" },
            { label: "كفاءة الخلايا شمسية", val: "22.5%" },
            { label: "جهد الدارة المفتوحة (Voc)", val: "51.8 فولت" },
            { label: "تيار الدارة القصيرة (Isc)", val: "14.1 أمبير" },
            { label: "الأبعاد الهندسية للوح", val: "2278 * 1134 * 35 ملم" },
            { label: "وزن اللوح الإجمالي", val: "28.5 كجم" },
            { label: "أقصى جهد للنظام الكهربائي", val: "1500 فولت مستمر" },
            { label: "ضمان الأداء التشغيلي", val: "25 سنة أداء خطي (84.8%)" }
        ]
    },
    bifacial: {
        title: "Al Noor Bifacial Solar Panel - 670W Specs",
        specs: [
            { label: "Nominal Power (Pmax Front)", val: "670 W" },
            { label: "Power Output with 15% Bifacial Gain", val: "770 W" },
            { label: "Module Efficiency", val: "23.0%" },
            { label: "Open Circuit Voltage (Voc)", val: "45.8 V" },
            { label: "Short Circuit Current (Isc)", val: "18.6 A" },
            { label: "Glass Structure", val: "2.0 mm / 2.0 mm Glass-Glass" },
            { label: "Dimensions", val: "2384 x 1303 x 35 mm" },
            { label: "Weight", val: "38.3 kg" },
            { label: "Performance Warranty", val: "30 Years Linear (87.4%)" }
        ],
        specsAr: [
            { label: "القدرة للوجه الأمامي (Pmax)", val: "670 واط" },
            { label: "القدرة الكلية مع ربح ثنائي 15%", val: "770 واط" },
            { label: "كفاءة اللوح الشمسي", val: "23.0%" },
            { label: "جهد الدارة المفتوحة (Voc)", val: "45.8 فولت" },
            { label: "تيار الدارة القصيرة (Isc)", val: "18.6 أمبير" },
            { label: "هيكل الزجاج الخلفي", val: "2.0 ملم زجاج مزدوج مقسى" },
            { label: "الأبعاد الهندسية للوح", val: "2384 * 1303 * 35 ملم" },
            { label: "وزن اللوح الإجمالي", val: "38.3 كجم" },
            { label: "ضمان الأداء التشغيلي الخطي", val: "30 سنة أداء خطي (87.4%)" }
        ]
    },
    smart: {
        title: "Al Noor Smart PV Panel - 600W Specs",
        specs: [
            { label: "Nominal Power (Pmax)", val: "600 W" },
            { label: "Module Efficiency", val: "23.8%" },
            { label: "Integrated Microinverter model", val: "Enphase IQ8 Ready" },
            { label: "AC Output Connection", val: "Grid-tie Ready 230V AC" },
            { label: "Individual panel tracking", val: "WiFi / Zigbee telemetry" },
            { label: "Rapid Shutdown compliance", val: "NEC 2020 Compliant" },
            { label: "Dimensions", val: "2172 x 1156 x 40 mm" },
            { label: "Weight", val: "31.2 kg" },
            { label: "Product & Performance Warranty", val: "25 Years Comprehensive" }
        ],
        specsAr: [
            { label: "القدرة الاسمية القصوى (Pmax)", val: "600 واط" },
            { label: "كفاءة اللوح الشمسي الذكي", val: "23.8%" },
            { label: "الميكروإنفرتر المدمج بالخلف", val: "مهيأ لـ Enphase IQ8" },
            { label: "ربط التيار المتردد المباشر", val: "تيار متردد 230 فولت" },
            { label: "المراقبة الذكية الفردية", val: "تواصل لاسلكي WiFi / Zigbee" },
            { label: "نظام الإغلاق السريع للأمان", val: "متوافق مع NEC 2020" },
            { label: "الأبعاد الهندسية للوح", val: "2172 * 1156 * 40 ملم" },
            { label: "وزن اللوح الإجمالي", val: "31.2 كجم" },
            { label: "الضمان الشامل للمنتج والأداء", val: "25 سنة شاملة القطع والإنتاج" }
        ]
    }
};

function initModal() {
    if (!els.modalCloseBtn) return;

    // Close button event
    els.modalCloseBtn.addEventListener("click", closeModal);
    els.modal.addEventListener("click", (e) => {
        if (e.target === els.modal) closeModal();
    });

    // Esc key closes modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && els.modal.classList.contains("active")) {
            closeModal();
        }
    });
}

function openModal(title, bodyHtml, actionBtnText, actionCallback) {
    els.modalTitle.textContent = title;
    els.modalBody.innerHTML = bodyHtml;

    if (actionBtnText && actionCallback) {
        els.modalActionBtn.style.display = "inline-flex";
        els.modalActionBtn.textContent = actionBtnText;

        // Remove old event listeners
        const newBtn = els.modalActionBtn.cloneNode(true);
        els.modalActionBtn.parentNode.replaceChild(newBtn, els.modalActionBtn);
        els.modalActionBtn = newBtn;

        els.modalActionBtn.addEventListener("click", () => {
            actionCallback();
        });
    } else {
        els.modalActionBtn.style.display = "none";
    }

    els.modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Lock scroll
}

function closeModal() {
    els.modal.classList.remove("active");
    document.body.style.overflow = ""; // Unlock scroll
}

// Open Datasheet Helper
window.viewDatasheet = function (panelType) {
    const data = technicalDatasheets[panelType];
    if (!data) return;

    const title = currentLang === "ar" ? `ورقة البيانات الفنية: ${data.title}` : data.title;
    const specList = currentLang === "ar" ? data.specsAr : data.specs;

    let html = `
        <div style="font-family: inherit;">
            <div style="display: flex; justify-content: center; margin-bottom: 24px;">
                <img src="logo.png" style="height: 60px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Al Noor Logo">
            </div>
            <table style="width:100%; border-collapse:collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: var(--primary); color: #ffffff;">
                        <th style="padding: 10px; text-align: start; border: 1px solid rgba(0,0,0,0.1); font-size: 0.9rem;">${currentLang === 'ar' ? 'المواصفة الفنية' : 'Technical Parameter'}</th>
                        <th style="padding: 10px; text-align: start; border: 1px solid rgba(0,0,0,0.1); font-size: 0.9rem;">${currentLang === 'ar' ? 'القيمة والمعدل' : 'Value / Rating'}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    specList.forEach((spec, idx) => {
        const bg = idx % 2 === 0 ? 'background-color: var(--bg-light);' : '';
        html += `
            <tr style="${bg}">
                <td style="padding: 12px 10px; border: 1px solid rgba(0,0,0,0.08); font-size: 0.85rem; font-weight: 600;">${spec.label}</td>
                <td style="padding: 12px 10px; border: 1px solid rgba(0,0,0,0.08); font-size: 0.85rem; font-weight: 700; color: var(--primary);">${spec.val}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
            <div style="background-color: rgba(244, 180, 26, 0.1); border-left: 3px solid var(--accent); padding: 12px; font-size: 0.75rem; color: #555; border-radius: var(--border-radius-sm);">
                ${currentLang === 'ar'
            ? 'جميع الفحوصات الفنية تمت بموجب اختبار التلألؤ المجهري الكهروضوئي المتكامل. حاصلة على الاعتماد القياسي SASO / IEC.'
            : 'All modules tested and certified under rigorous laboratory conditions including EL micro-crack analysis. SASO / IEC certified.'}
            </div>
        </div>
    `;

    const printText = translations[currentLang]["modal-print"];
    openModal(title, html, printText, () => {
        window.print();
    });
};

// 5. Contact RFP form handler with premium popup
function initContactForm() {
    if (!els.contactForm) return;

    els.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Retrieve values for validation (simple mock)
        const name = els.contactForm.querySelector('input[type="text"]').value.trim();
        const email = els.contactForm.querySelector('input[type="email"]').value.trim();

        if (name === "" || email === "") {
            alert(currentLang === "ar" ? "يرجى تعبئة الحقول الأساسية" : "Please fill in the required fields");
            return;
        }

        // Show success state modal
        const title = translations[currentLang]["success-title"];
        const msg = translations[currentLang]["success-msg"];
        const btnText = translations[currentLang]["success-btn"];

        const successBody = `
            <div style="text-align: center; font-family: inherit;">
                <div style="width: 60px; height: 60px; border-radius: 50%; background-color: rgba(40,167,69,0.1); color: #28a745; display: inline-flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 20px;">
                    ✓
                </div>
                <p style="font-size: 1rem; color: #555; line-height: 1.6; margin-bottom: 8px;">${msg}</p>
            </div>
        `;

        openModal(title, successBody, btnText, () => {
            closeModal();
            els.contactForm.reset();
        });
    });
}

// 6. Project filter grid
function initProjectFilters() {
    if (els.projectFilters.length === 0) return;

    els.projectFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active from all
            els.projectFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            // Filter cards
            els.projectCards.forEach(card => {
                const cat = card.getAttribute("data-category");
                if (filter === "all" || cat === filter) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });
}

// 7. Scroll Reveal Animation Trigger
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => observer.observe(el));
}

// 8. Mobile Menu Drawer
function initMobileMenu() {
    if (!els.menuToggle) return;

    els.menuToggle.addEventListener("click", () => {
        els.navbar.classList.toggle("nav-active");
    });

    // Close mobile nav when link clicked
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            els.navbar.classList.remove("nav-active");
        });
    });
}

// 9. Sticky Header on Scroll
function initStickyHeader() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            els.navbar.classList.add("scrolled");
        } else {
            els.navbar.classList.remove("scrolled");
        }
    });
}

// 10. FAQ Accordion Toggle
function initFaq() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                
                // Close all other items
                faqItems.forEach(i => i.classList.remove("active"));
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });
}

// Page initialization
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initMobileMenu();
    initStickyHeader();
    initElSimulator();
    initCalculator();
    initModal();
    initContactForm();
    initProjectFilters();
    initScrollReveal();
    initFaq();
});
