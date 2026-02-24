const el: Record<string, string> = {
  // ── Πλοήγηση ──
  'nav.home': 'Αρχική',
  'nav.services': 'Υπηρεσίες',
  'nav.about': 'Σχετικά',
  'nav.projects': 'Έργα',
  'nav.contact': 'Επικοινωνία',

  // ── Hero ──
  'hero.badge': 'Χωρίς φούμαρα. Χωρίς δράματα. Απλά λύσεις που δουλεύουν.',
  'hero.title1': 'Δεν Γράφουμε Απλά',
  'hero.titleHighlight1': 'Κώδικα',
  'hero.title2': 'Λύνουμε',
  'hero.titleHighlight2': 'Προβλήματα',
  'hero.subtitle':
    'Κοίτα, καταλαβαίνουμε — τα πράγματα χαλάνε, τα deadlines στοιβάζονται, και εκείνο το legacy codebase που κανείς δεν θέλει να αγγίξει γίνεται ολοένα χειρότερο. Εμείς είμαστε η ομάδα που καλείς όταν χρειάζεσαι κάποιον να σηκώσει μανίκια και να κάνει τη δουλειά. Χωρίς εταιρική ορολογία, μόνο πραγματική δουλειά.',
  'hero.btnTalk': 'Ας Μιλήσουμε',
  'hero.btnServices': 'Τι Κάνουμε',
  'hero.trust': 'Πραγματικοί devs & startups μας εμπιστεύονται τον κώδικά τους',
  'hero.codeTitle': 'fix_legacy.py',
  'hero.codeBefore': '# Πριν το Erevos.io',
  'hero.codeAfter': '# Μετά το Erevos.io ✨',

  // ── Στατιστικά ──
  'stats.projects': 'Ολοκληρωμένα Έργα',
  'stats.uptime': 'Uptime. Σοβαρά.',
  'stats.available': 'Είμαστε Εδώ',
  'stats.partners': 'Χαρούμενοι Συνεργάτες',

  // ── Τι Κάνουμε ──
  'whatwedo.tag': 'ΤΑ ΠΡΑΓΜΑΤΙΚΑ',
  'whatwedo.title': 'Τρία Προβλήματα.',
  'whatwedo.titleHighlight': 'Μία Ομάδα.',
  'whatwedo.subtitle': 'Δεν κάνουμε τα πάντα — αυτά τα τρία τα κάνουμε πολύ καλά',

  // ── Πυλώνες ──
  'pillar1.title': 'Φτιάχνουμε Χαλασμένο Κώδικα',
  'pillar1.desc':
    'Σώζουμε legacy συστήματα, εξοντώνουμε bugs, και μετατρέπουμε χαοτικά codebases σε καθαρό, συντηρήσιμο λογισμικό.',
  'pillar1.feat1': 'Διάσωση legacy',
  'pillar1.feat2': 'Εξόντωση bugs',
  'pillar1.feat3': 'Βελτιστοποίηση απόδοσης',
  'pillar1.feat4': 'Εκσυγχρονισμός κώδικα',

  'pillar2.title': 'Αυτοματοποιούμε τα Πάντα',
  'pillar2.desc':
    'Από CI/CD pipelines μέχρι business workflows — εξαλείφουμε τις επαναλαμβανόμενες εργασίες ώστε η ομάδα σου να εστιάσει στο ουσιαστικό.',
  'pillar2.feat1': 'CI/CD pipelines',
  'pillar2.feat2': 'Αυτοματοποίηση workflows',
  'pillar2.feat3': 'Ενορχήστρωση APIs',
  'pillar2.feat4': 'Data pipelines',

  'pillar3.title': 'Λύνουμε Δύσκολα Προβλήματα',
  'pillar3.desc':
    'Architecture reviews, σχεδιασμός συστημάτων, και custom λύσεις για τις προκλήσεις που δυσκολεύουν άλλες ομάδες.',
  'pillar3.feat1': 'Αρχιτεκτονική συστημάτων',
  'pillar3.feat2': 'Τεχνική συμβουλευτική',
  'pillar3.feat3': 'Custom λύσεις',
  'pillar3.feat4': 'Σχεδιασμός κλιμάκωσης',

  // ── Προεπισκόπηση Υπηρεσιών ──
  'services.tag': 'ΠΩΣ ΒΟΗΘΑΜΕ',
  'services.title': 'Πράγματα που',
  'services.titleHighlight': 'Ξέρουμε Καλά',
  'services.subtitle': 'Χωρίς buzzwords, απλά αυτό που παραδίδουμε',
  'services.seeAll': 'Δες Όλες τις Υπηρεσίες',
  'services.learnMore': 'Μάθε Περισσότερα',

  // ── Κάρτες Υπηρεσιών ──
  'service1.title': 'Επιδιόρθωση & Καθαρισμός Κώδικα',
  'service1.desc':
    'Ο κώδικάς σου είναι χαλασμένος ή ακατάστατος; Θα μπούμε μέσα και θα τον κάνουμε να δουλεύει σωστά.',
  'service1.feat1': 'Διάσωση legacy κώδικα',
  'service1.feat2': 'Επιδιόρθωση bugs',
  'service1.feat3': 'Ενίσχυση απόδοσης',

  'service2.title': 'Αυτοματοποίηση',
  'service2.desc':
    'Σταμάτα να κάνεις πράγματα χειροκίνητα. Θα στήσουμε τα pipelines και τα workflows για σένα.',
  'service2.feat1': 'Αυτοματοποίηση workflows',
  'service2.feat2': 'Ενσωμάτωση APIs',
  'service2.feat3': 'Στήσιμο data pipelines',

  'service3.title': 'Τεχνική Συμβουλευτική',
  'service3.desc': 'Χρειάζεσαι ειλικρινή απάντηση για το tech stack σου; Θα στη δώσουμε.',
  'service3.feat1': 'Ειλικρινείς τεχνικές συμβουλές',
  'service3.feat2': 'Custom κατασκευές',
  'service3.feat3': 'Σχεδιασμός αρχιτεκτονικής',

  'service4.title': 'Διάσωση Legacy',
  'service4.desc':
    'Παλιό σύστημα που κανείς δεν θέλει να αγγίξει; Θα το εκσυγχρονίσουμε χωρίς να το κάψουμε.',
  'service4.feat1': 'Μετάβαση στο cloud',
  'service4.feat2': 'Microservices',
  'service4.feat3': 'Containerization',

  'service5.title': 'Ενσωμάτωση API',
  'service5.desc': 'Χρειάζεται τα συστήματά σου να μιλάνε μεταξύ τους; Θα τα συνδέσουμε σωστά.',
  'service5.feat1': 'REST & GraphQL APIs',
  'service5.feat2': 'Third-party συνδέσεις',
  'service5.feat3': 'Webhook συστήματα',

  'service6.title': 'Τεχνολογική Στρατηγική',
  'service6.desc': 'Δεν ξέρεις τι stack να χρησιμοποιήσεις ή πώς να κλιμακωθείς; Θα σε βοηθήσουμε.',
  'service6.feat1': 'Αξιολόγηση αρχιτεκτονικής',
  'service6.feat2': 'Επιλογή stack',
  'service6.feat3': 'Βέλτιστες πρακτικές',

  // ── Διαδικασία ──
  'process.tag': 'ΧΩΡΙΣ ΜΥΣΤΗΡΙΑ',
  'process.title': 'Πώς',
  'process.titleHighlight': 'Δουλεύει',
  'process.subtitle': 'Τέσσερα βήματα. Χωρίς εκπλήξεις. Χωρίς κρυφά κόστη.',
  'process1.title': 'Μιλάμε',
  'process1.desc': 'Μας λες τι έχει χαλάσει. Ακούμε — χωρίς sales pitch.',
  'process2.title': 'Ψάχνουμε',
  'process2.desc':
    'Κοιτάμε τον κώδικά σου, βρίσκουμε τα πραγματικά προβλήματα, και στα λέμε ντόμπρα.',
  'process3.title': 'Χτίζουμε & Φτιάχνουμε',
  'process3.desc': 'Καθαρός κώδικας, δοκιμασμένος, production-ready. Χωρίς shortcuts.',
  'process4.title': 'Deploy & Support',
  'process4.desc': 'Πάει live, δουλεύει, κι εμείς μένουμε εδώ αν μας χρειαστείς.',

  // ── CTA ──
  'cta.title': 'Έχεις',
  'cta.titleHighlight': 'Πρόβλημα;',
  'cta.titleEnd': 'Ας το Φτιάξουμε.',
  'cta.subtitle':
    'Στείλε μας ένα μήνυμα. Θα δούμε το project σου, θα σε ενημερώσουμε ειλικρινά, και πάμε από εκεί. Χωρίς πίεση.',
  'cta.btnChat': 'Ας Μιλήσουμε',
  'cta.btnPricing': 'Δες Πόσο Κοστίζει',

  // ── Footer ──
  'footer.description':
    'Φτιάχνουμε χαλασμένο κώδικα, αυτοματοποιούμε τα βαρετά, και σε βοηθάμε να κάνεις ship πιο γρήγορα. Χωρίς φούμαρα — μόνο ειλικρινής μηχανική δουλειά.',
  'footer.quickLinks': 'Γρήγοροι Σύνδεσμοι',
  'footer.ourServices': 'Υπηρεσίες Μας',
  'footer.getInTouch': 'Επικοινωνία',
  'footer.copyright': 'Erevos.io. Με επιφύλαξη παντός δικαιώματος.',
  'footer.privacy': 'Πολιτική Απορρήτου',
  'footer.terms': 'Όροι Χρήσης',
  'footer.cookies': 'Πολιτική Cookies',
  'footer.aboutUs': 'Σχετικά',
  'footer.codeFixing': 'Επιδιόρθωση Κώδικα',
  'footer.processAutomation': 'Αυτοματοποίηση',
  'footer.problemSolving': 'Επίλυση Προβλημάτων',
  'footer.legacyModernization': 'Εκσυγχρονισμός Legacy',
  'footer.apiIntegration': 'Ενσωμάτωση API',
  'footer.techConsulting': 'Τεχνική Συμβουλευτική',
  'footer.blog': 'Blog',

  // ── Σελίδα Υπηρεσιών ──
  'servicesPage.title1': 'Τι',
  'servicesPage.titleHighlight': 'Κάνουμε Πραγματικά',
  'servicesPage.subtitle': 'Χωρίς buzzwords. Να πώς μπορούμε να βοηθήσουμε.',

  // ── Σελίδα Επικοινωνίας ──
  'contact.title1': 'Ας',
  'contact.titleHighlight': 'Μιλήσουμε',
  'contact.subtitle': 'Έχεις project; Πρόβλημα; Θες απλά να τα πούμε; Είμαστε εδώ.',
  'contact.formTitle': 'Στείλε μας μήνυμα',
  'contact.name': 'Όνομα',
  'contact.namePlaceholder': 'Το όνομά σου',
  'contact.email': 'Email',
  'contact.emailPlaceholder': 'to@email.sou',
  'contact.subject': 'Θέμα',
  'contact.subjectPlaceholder': 'Πώς μπορούμε να βοηθήσουμε;',
  'contact.service': 'Υπηρεσία',
  'contact.serviceDefault': 'Επέλεξε υπηρεσία (προαιρετικό)',
  'contact.serviceOption1': 'Επιδιόρθωση & Refactoring Κώδικα',
  'contact.serviceOption2': 'Αυτοματοποίηση Διαδικασιών',
  'contact.serviceOption3': 'Επίλυση Προβλημάτων',
  'contact.serviceOption4': 'Τεχνική Συμβουλευτική',
  'contact.message': 'Μήνυμα',
  'contact.messagePlaceholder': 'Πες μας για το project σου...',
  'contact.sending': 'Αποστολή...',
  'contact.send': 'Αποστολή Μηνύματος',
  'contact.infoTitle': 'Επικοινώνησε μαζί μας',
  'validation.nameRequired': 'Το όνομα είναι υποχρεωτικό',
  'validation.emailRequired': 'Το email είναι υποχρεωτικό',
  'validation.emailInvalid': 'Παρακαλώ εισάγετε ένα έγκυρο email',
  'validation.subjectRequired': 'Το θέμα είναι υποχρεωτικό',
  'validation.messageRequired': 'Το μήνυμα είναι υποχρεωτικό',
  'contact.success': 'Ευχαριστούμε! Η ομάδα μας θα επικοινωνήσει μαζί σου σύντομα.',
  'contact.error': 'Κάτι πήγε στραβά. Δοκίμασε ξανά.',

  // ── Σχετικά ──
  'about.title': 'Σχετικά με εμάς',

  // ── Έργα ──
  'projects.title': 'Τα',
  'projects.titleHighlight': 'Έργα Μας',
  'projects.subtitle': 'Επιτυχημένα projects ανάπτυξης λογισμικού',
  'project1.title': 'Διάσωση Legacy Συστήματος',
  'project1.desc': 'Εκσυγχρονίσαμε μια enterprise εφαρμογή 15 ετών με μηδενικό downtime.',
  'project2.title': 'Automation Pipeline',
  'project2.desc': 'Χτίσαμε end-to-end CI/CD pipeline μειώνοντας τον χρόνο deployment κατά 80%.',
  'project3.title': 'Πλατφόρμα Ενσωμάτωσης AI',
  'project3.desc': 'Αναπτύξαμε custom AI-powered analytics dashboard για real-time insights.',

  // ── Συχνές Ερωτήσεις ──
  'faq.title': 'Συχνές',
  'faq.titleHighlight': 'Ερωτήσεις',
  'faq.subtitle': 'Βρες απαντήσεις σε συνηθισμένες ερωτήσεις για τις υπηρεσίες μας',
  'faq1.q': 'Τι κάνετε πραγματικά;',
  'faq1.a':
    'Φτιάχνουμε χαλασμένο κώδικα, αυτοματοποιούμε επαναλαμβανόμενες διαδικασίες, βοηθάμε με αρχιτεκτονικές αποφάσεις, εκσυγχρονίζουμε παλιά συστήματα, χτίζουμε APIs, και κάνουμε custom development. Βασικά — αν είναι πρόβλημα λογισμικού, πιθανότατα μπορούμε να βοηθήσουμε.',
  'faq2.q': 'Πόσο διαρκεί ένα project;',
  'faq2.a':
    'Εξαρτάται από το χάλι. Μικρές διορθώσεις; Λίγες μέρες. Μεγαλύτερα projects; Συνήθως 2-8 εβδομάδες. Θα σου δώσουμε ντόμπρα εκτίμηση από την αρχή — χωρίς εκπλήξεις.',
  'faq3.q': 'Μένετε μετά το launch;',
  'faq3.a':
    'Ναι, μένουμε. Προσφέρουμε πακέτα υποστήριξης για να κρατάμε τα πράγματα σε τάξη. Δεν είμαστε από αυτούς που κάνουν ship και εξαφανίζονται.',
  'faq4.q': 'Πώς ξεκινάω;',
  'faq4.a':
    'Απλά επικοινώνησε μαζί μας μέσω της σελίδας επικοινωνίας ή στείλε email στο hello@erevos.io. Θα κάνουμε μια πραγματική συζήτηση για αυτό που χρειάζεσαι — χωρίς sales pitch, χωρίς πίεση.',

  // ── Τιμολόγηση ──
  'pricing.title': 'Πόσο',
  'pricing.titleHighlight': 'Κοστίζει',
  'pricing.subtitle': 'Ξεκάθαρες τιμές. Χωρίς κρυφές χρεώσεις.',
  'pricing.getStarted': 'Ξεκίνα',
  'pricing.mostPopular': 'Πιο Δημοφιλές',
  'plan1.name': 'Starter',
  'plan1.price': '€999',
  'plan1.period': '/project',
  'plan1.desc': 'Γρήγορες διορθώσεις, code reviews — γρήγορα αποτελέσματα',
  'plan1.feat1': 'Επιδιόρθωση bugs',
  'plan1.feat2': 'Code review',
  'plan1.feat3': 'Μέχρι 10 ώρες',
  'plan1.feat4': 'Υποστήριξη μέσω email',
  'plan2.name': 'Professional',
  'plan2.price': '€2.999',
  'plan2.period': '/μήνα',
  'plan2.desc': 'Για ομάδες που χρειάζονται συνεχή ανάπτυξη και αυτοματοποίηση',
  'plan2.feat1': 'Όλα από το Starter',
  'plan2.feat2': 'Αυτοματοποίηση διαδικασιών',
  'plan2.feat3': 'Υποστήριξη κατά προτεραιότητα',
  'plan2.feat4': 'Μέχρι 40 ώρες',
  'plan2.feat5': 'AI-powered ανάλυση κώδικα',
  'plan3.name': 'Enterprise',
  'plan3.price': 'Custom',
  'plan3.period': '',
  'plan3.desc': 'Μεγάλο project; Ας μιλήσουμε και θα βρούμε λύση',
  'plan3.feat1': 'Όλα από το Professional',
  'plan3.feat2': 'Αφοσιωμένη ομάδα',
  'plan3.feat3': 'Custom SLA',
  'plan3.feat4': 'Αξιολόγηση αρχιτεκτονικής',
  'plan3.feat5': '24/7 υποστήριξη',

  // ── Ομάδα ──
  'team.title': 'Η',
  'team.titleHighlight': 'Ομάδα Μας',
  'team.subtitle': 'Γνώρισε τους ειδικούς πίσω από το Erevos.io',
  'team1.name': 'Ευκλείδης',
  'team1.role': 'Ιδρυτής & Lead Developer',
  'team1.bio':
    'Full-stack developer με πάθος για το φτιάξιμο χαλασμένου κώδικα και τη δημιουργία κομψών λύσεων.',
  'team2.name': 'Έλα Μαζί Μας',
  'team2.role': 'Ο Ρόλος Σου Εδώ',
  'team2.bio': 'Ψάχνουμε πάντα ταλαντούχα άτομα για να ενταχθούν στην ομάδα μας.',

  // ── Καριέρα ──
  'careers.title': 'Μπες στην',
  'careers.titleHighlight': 'Erevos.io',
  'careers.subtitle': 'Χτίσε το μέλλον του λογισμικού μαζί μας',
  'careers.openPositions': 'Ανοιχτές Θέσεις',
  'careers.lookingForTalent': 'Ψάχνουμε πάντα ταλαντούχους ανθρώπους για την ομάδα μας',
  'careers.noPositions': 'Δεν υπάρχουν ανοιχτές θέσεις αυτή τη στιγμή',
  'careers.sendResume':
    'Δεν προσλαμβάνουμε αυτή τη στιγμή, αλλά θα χαρούμε να ακούσουμε από σένα. Στείλε το βιογραφικό σου στο',

  // ── Blog ──
  'blog.title': 'Το',
  'blog.titleHighlight': 'Blog Μας',
  'blog.subtitle': 'Τελευταία insights για ανάπτυξη λογισμικού και αυτοματοποίηση',
  'blog.all': 'Όλα',
  'blog.readMore': 'Διάβασε Περισσότερα',
  'blog.development': 'Ανάπτυξη',
  'blog.automation': 'Αυτοματοποίηση',
  'blog.ai': 'AI',
  'blog.devops': 'DevOps',
  'blog1.title': 'Εκσυγχρονισμός Legacy Κώδικα: Πρακτικός Οδηγός',
  'blog1.excerpt':
    'Μάθε πώς να μετατρέψεις ξεπερασμένα codebases σε σύγχρονο, συντηρήσιμο λογισμικό.',
  'blog2.title': 'Βέλτιστες Πρακτικές Αυτοματοποίησης για το 2026',
  'blog2.excerpt':
    'Ανακάλυψε τις τελευταίες στρατηγικές αυτοματοποίησης για πιο αποδοτικά workflows.',
  'blog3.title': 'AI-Powered Development: Το Μέλλον Είναι Εδώ',
  'blog3.excerpt': 'Πώς η AI μεταμορφώνει το τοπίο ανάπτυξης λογισμικού.',

  // ── Blog Post ──
  'blogPost.backToBlog': 'Πίσω στο Blog',
  'blogPost.comingSoon':
    'Αυτό το blog post έρχεται σύντομα. Μείνε συντονισμένος για λεπτομερές περιεχόμενο σχετικά με',

  // ── Blog Category ──
  'blogCategory.backToBlog': 'Πίσω στο Blog',
  'blogCategory.category': 'Κατηγορία:',
  'blogCategory.browseIn': 'Δες posts στην κατηγορία',
  'blogCategory.categorySuffix': '',
  'blogCategory.comingSoon':
    'Τα posts αυτής της κατηγορίας έρχονται σύντομα. Ξανατσέκαρε αργότερα!',
  'blogCategory.browseAll': 'Δες Όλα τα Posts',

  // ── Λεπτομέρειες Υπηρεσίας ──
  'serviceDetail.title': 'Λεπτομέρειες',
  'serviceDetail.titleHighlight': 'Υπηρεσίας',
  'serviceDetail.learnAbout': 'Μάθε περισσότερα για την υπηρεσία',
  'serviceDetail.service': 'μας',
  'serviceDetail.desc':
    'Αυτό κάνουμε καλύτερα. Επικοινώνησε μαζί μας αν θες να μάθεις περισσότερα ή απλά θες να τα πούμε.',
  'serviceDetail.btnTalk': 'Ας Μιλήσουμε',

  // ── Λεπτομέρειες Έργου ──
  'projectDetail.title': 'Μελέτη',
  'projectDetail.titleHighlight': 'Περίπτωσης',
  'projectDetail.desc':
    'Η πλήρης μελέτη περίπτωσης έρχεται σύντομα. Θέλεις λεπτομέρειες; Επικοινώνησε μαζί μας — θα χαρούμε να σε ξεναγήσουμε.',
  'projectDetail.backToProjects': 'Πίσω στα Έργα',

  // ── Πολιτική Απορρήτου ──
  'privacy.title': 'Πολιτική',
  'privacy.titleHighlight': 'Απορρήτου',
  'privacy.lastUpdated': 'Τελευταία ενημέρωση: Φεβρουάριος 2026',
  'privacy.h2_1': '1. Πληροφορίες που Συλλέγουμε',
  'privacy.p1':
    'Συλλέγουμε πληροφορίες που μας παρέχετε απευθείας, όπως όταν συμπληρώνετε μια φόρμα επικοινωνίας ή επικοινωνείτε μαζί μας μέσω email.',
  'privacy.h2_2': '2. Πώς Χρησιμοποιούμε τις Πληροφορίες σας',
  'privacy.p2':
    'Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για να παρέχουμε, συντηρούμε και βελτιώνουμε τις υπηρεσίες μας, να επικοινωνούμε μαζί σας και να απαντάμε στα ερωτήματά σας.',
  'privacy.h2_3': '3. Κοινοποίηση Πληροφοριών',
  'privacy.p3':
    'Δεν πωλούμε, ανταλλάσσουμε ή μεταφέρουμε τις προσωπικές σας πληροφορίες σε τρίτα μέρη χωρίς τη συγκατάθεσή σας, εκτός αν περιγράφεται σε αυτήν την πολιτική.',
  'privacy.h2_4': '4. Ασφάλεια Δεδομένων',
  'privacy.p4':
    'Εφαρμόζουμε κατάλληλα μέτρα ασφαλείας για την προστασία των προσωπικών σας πληροφοριών από μη εξουσιοδοτημένη πρόσβαση, τροποποίηση, αποκάλυψη ή καταστροφή.',
  'privacy.h2_5': '5. Επικοινωνία',
  'privacy.p5':
    'Έχεις ερωτήσεις σχετικά με αυτήν την Πολιτική Απορρήτου; Στείλε μας email στο privacy@erevos.io.',

  // ── Όροι Χρήσης ──
  'terms.title': 'Όροι',
  'terms.titleHighlight': 'Χρήσης',
  'terms.lastUpdated': 'Τελευταία ενημέρωση: Φεβρουάριος 2026',
  'terms.h2_1': '1. Αποδοχή Όρων',
  'terms.p1':
    'Χρησιμοποιώντας το Erevos.io, αποδέχεστε και συμφωνείτε να δεσμεύεστε από αυτούς τους Όρους Χρήσης.',
  'terms.h2_2': '2. Υπηρεσίες',
  'terms.p2':
    'Το Erevos.io παρέχει υπηρεσίες ανάπτυξης λογισμικού, επιδιόρθωσης κώδικα, αυτοματοποίησης διαδικασιών και τεχνικής συμβουλευτικής όπως περιγράφονται στην ιστοσελίδα μας.',
  'terms.h2_3': '3. Πνευματική Ιδιοκτησία',
  'terms.p3':
    'Όλο το περιεχόμενο, ο κώδικας και τα υλικά σε αυτήν την ιστοσελίδα είναι ιδιοκτησία της Erevos.io εκτός αν δηλώνεται διαφορετικά. Η custom εργασία που παραδίδεται στους πελάτες γίνεται ιδιοκτησία τους μετά την πλήρη πληρωμή.',
  'terms.h2_4': '4. Περιορισμός Ευθύνης',
  'terms.p4':
    'Η Erevos.io δεν ευθύνεται για τυχόν έμμεσες, αστικές, ειδικές ή επακόλουθες ζημίες που προκύπτουν από τη χρήση των υπηρεσιών μας.',
  'terms.h2_5': '5. Ερωτήσεις;',
  'terms.p5': 'Έχεις ερωτήσεις σχετικά με τους Όρους; Επικοινώνησε στο legal@erevos.io.',

  // ── Πολιτική Cookies ──
  'cookies.title': 'Πολιτική',
  'cookies.titleHighlight': 'Cookies',
  'cookies.lastUpdated': 'Τελευταία ενημέρωση: Φεβρουάριος 2026',
  'cookies.h2_1': '1. Τι Είναι τα Cookies',
  'cookies.p1':
    'Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε τον ιστότοπό μας. Μας βοηθούν να παρέχουμε καλύτερη εμπειρία χρήσης.',
  'cookies.h2_2': '2. Πώς Χρησιμοποιούμε τα Cookies',
  'cookies.p2':
    'Χρησιμοποιούμε cookies για βασική λειτουργικότητα, analytics και για να θυμόμαστε τις προτιμήσεις σας.',
  'cookies.h2_3': '3. Τύποι Cookies που Χρησιμοποιούμε',
  'cookies.p3a': 'Απαραίτητα Cookies: Απαιτούνται για τη σωστή λειτουργία του ιστότοπου.',
  'cookies.p3b':
    'Analytics Cookies: Μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τον ιστότοπό μας.',
  'cookies.p3c': 'Cookies Προτιμήσεων: Θυμούνται τις ρυθμίσεις και τις επιλογές σας.',
  'cookies.h2_4': '4. Διαχείριση Cookies',
  'cookies.p4':
    'Μπορείτε να ελέγξετε και να διαχειριστείτε τα cookies μέσω των ρυθμίσεων του browser σας. Σημειώστε ότι η απενεργοποίηση ορισμένων cookies μπορεί να επηρεάσει τη λειτουργικότητα του ιστότοπου.',
  'cookies.h2_5': '5. Ερωτήσεις;',
  'cookies.p5': 'Έχεις ερωτήσεις σχετικά με τα cookies; Επικοινώνησε στο privacy@erevos.io.',

  // ── 404 ──
  'notFound.title': '404',
  'notFound.subtitle': 'Η Σελίδα Δεν Βρέθηκε',
  'notFound.desc': 'Η σελίδα που ψάχνεις μπορεί να μεταφέρθηκε ή δεν υπάρχει.',
  'notFound.home': 'Πίσω στην Αρχική',
  'notFound.contact': 'Μίλησέ Μας',

  // ── Συντήρηση ──
  'maintenance.title': 'Υπό',
  'maintenance.titleHighlight': 'Συντήρηση',
  'maintenance.desc':
    'Αυτή τη στιγμή πραγματοποιούμε προγραμματισμένη συντήρηση για τη βελτίωση των υπηρεσιών μας. Θα επιστρέψουμε σύντομα!',
  'maintenance.note': 'Αναβαθμίζουμε τα συστήματά μας...',
}

export default el
