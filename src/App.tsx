import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, BookOpen, ArrowRight, CheckCircle2, 
  Cpu, Building, Plane, Ship, Stethoscope, Smile, Activity, Pill,
  Calculator, Briefcase, FileText, TrendingUp, Scale, PenTool, Brain, Mic,
  Wrench, PenTool as Tool, Search, ChevronRight, Lightbulb, Target, Users, Clock,
  Shield, FlaskConical, Leaf, Monitor, Utensils, Globe, Award, Code, Filter, X, PlayCircle, Anchor, Dog, Dumbbell, Zap, Radio, HeartPulse, Scissors, Home, Film, Moon, Sun, Languages
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Badge } from "@/src/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { after10thStreams, after12thStreams, Stream, CareerPath } from "@/src/data/careers";
import CareerRoadmap from "@/src/components/CareerRoadmap";
import { CareerChart } from "@/src/components/CareerChart";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Building, Plane, Ship, Stethoscope, Smile, Activity, Pill,
  Calculator, Briefcase, FileText, TrendingUp, Scale, PenTool, Brain, Mic,
  Wrench, Tool, Shield, FlaskConical, Leaf, Monitor, Utensils, Globe, Award, Code, Anchor, Dog, Dumbbell, Zap, Radio, HeartPulse, Scissors, Home, Film
};

const translations = {
  en: {
    navAbout: "About",
    navExplore: "Explore",
    navParents: "Parents",
    navMentors: "Mentors",
    heroTitle: "Confused about what to study after ",
    heroTitleHighlight: "10th or 12th?",
    heroSubtitle: "Don't worry, you're not alone. Explore hundreds of career options, understand the required exams, skills, and qualifications in one simple place.",
    btn10th: "I just finished 10th",
    btn12th: "I just finished 12th",
    freeToUse: "Free to use",
    factualData: "Factual Data",
    noSignUp: "No Sign-up",
    roadmapTitle: "Career Roadmaps",
    roadmapSubtitle: "Select your current level to see the most popular and high-growth career paths available to you.",
    searchPlaceholder: "Search careers, skills, or interests...",
    whatToBecome: "What do you want to become?",
    allOutcomes: "All Career Outcomes",
    allStreams: "All Streams",
    whyWhatsNext: "Why What's Next — Career Decision Engine?",
    forParents: "For Parents & Guardians",
    supportJourney: "Support their journey,",
    withoutStress: "without the stress.",
    parentSubtitle: "We know you want the best for your child. The career landscape has changed drastically. Traditional paths are no longer the only way to success.",
    exploreTogether: "Explore together:",
    exploreTogetherDesc: "Sit with your child and look at the options based on their interests, not just marks.",
    understandReq: "Understand the requirements:",
    understandReqDesc: "See exactly which exams and skills are needed for modern jobs like Data Science or Design.",
    footerSubtitle: "Empowering the next generation of professionals with data-driven career roadmaps and expert guidance.",
    navigation: "Navigation",
    explore: "Explore",
    parents: "Parents",
    about: "About",
    connect: "Connect",
    allRightsReserved: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    choosePath: "Choose a Career Path",
    in: "in",
    list: "List",
    map: "Map",
    exploreRoadmap: "Explore Roadmap",
    backToExplore: "Back to Explore",
    overview: "Overview",
    exams: "Entrance Exams",
    degrees: "Top Degrees",
    jobs: "Career Outcomes (Jobs)",
    scholarships: "Scholarships & Financial Aid",
    studyAbroad: "Study Abroad Opportunities",
    growthTrends: "Growth & Salary Trends",
    salaryProgression: "Salary Progression (LPA)",
    yearsExperience: "Years of Experience",
    country: "Country",
    university: "University",
    course: "Course",
    keySkills: "Key Skills",
    careerOutcomes: "Career Outcomes",
    noScholarships: "No specific scholarships listed for this path yet.",
    noStudyAbroad: "No specific study abroad opportunities listed for this path yet."
  },
  hi: {
    navAbout: "हमारे बारे में",
    navExplore: "एक्सप्लोर करें",
    navParents: "अभिभावक",
    navMentors: "मेंटर",
    heroTitle: "10वीं या 12वीं के बाद क्या पढ़ें, इसे लेकर ",
    heroTitleHighlight: "उलझन में हैं?",
    heroSubtitle: "चिंता न करें, आप अकेले नहीं हैं। सैकड़ों करियर विकल्पों का पता लगाएं, आवश्यक परीक्षाओं, कौशल और योग्यताओं को एक ही सरल स्थान पर समझें।",
    btn10th: "मैंने अभी 10वीं पूरी की है",
    btn12th: "मैंने अभी 12वीं पूरी की है",
    freeToUse: "उपयोग के लिए निःशुल्क",
    factualData: "तथ्यात्मक डेटा",
    noSignUp: "कोई साइन-अप नहीं",
    roadmapTitle: "करियर रोडमैप",
    roadmapSubtitle: "अपने वर्तमान स्तर का चयन करें और अपने लिए उपलब्ध सबसे लोकप्रिय और उच्च-विकास वाले करियर पथ देखें।",
    searchPlaceholder: "करियर, कौशल या रुचियां खोजें...",
    whatToBecome: "आप क्या बनना चाहते हैं?",
    allOutcomes: "सभी करियर परिणाम",
    allStreams: "सभी स्ट्रीम",
    whyWhatsNext: "व्हाट्स नेक्स्ट — करियर डिसीजन इंजन क्यों?",
    forParents: "माता-पिता और अभिभावकों के लिए",
    supportJourney: "उनकी यात्रा का समर्थन करें,",
    withoutStress: "बिना तनाव के।",
    parentSubtitle: "हम जानते हैं कि आप अपने बच्चे के लिए सबसे अच्छा चाहते हैं। करियर का परिदृश्य काफी बदल गया है। पारंपरिक रास्ते अब सफलता का एकमात्र तरीका नहीं हैं।",
    exploreTogether: "साथ मिलकर एक्सप्लोर करें:",
    exploreTogetherDesc: "अपने बच्चे के साथ बैठें और केवल अंकों के आधार पर नहीं, बल्कि उनकी रुचियों के आधार पर विकल्पों को देखें।",
    understandReq: "आवश्यकताओं को समझें:",
    understandReqDesc: "देखें कि डेटा साइंस या डिज़ाइन जैसी आधुनिक नौकरियों के लिए वास्तव में किन परीक्षाओं और कौशलों की आवश्यकता है।",
    footerSubtitle: "डेटा-संचालित करियर रोडमैप और विशेषज्ञ मार्गदर्शन के साथ पेशेवरों की अगली पीढ़ी को सशक्त बनाना।",
    navigation: "नेविगेशन",
    explore: "एक्सप्लोर करें",
    parents: "अभिभावक",
    about: "हमारे बारे में",
    connect: "जुड़ें",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें",
    choosePath: "एक करियर पथ चुनें",
    in: "में",
    list: "सूची",
    map: "नक्शा",
    exploreRoadmap: "रोडमैप एक्सप्लोर करें",
    backToExplore: "एक्सप्लोर पर वापस जाएं",
    overview: "अवलोकन",
    exams: "प्रवेश परीक्षाएं",
    degrees: "शीर्ष डिग्री",
    jobs: "करियर परिणाम (नौकरियां)",
    scholarships: "छात्रवृत्ति और वित्तीय सहायता",
    studyAbroad: "विदेश में अध्ययन के अवसर",
    growthTrends: "विकास और वेतन रुझान",
    salaryProgression: "वेतन प्रगति (LPA)",
    yearsExperience: "अनुभव के वर्ष",
    country: "देश",
    university: "विश्वविद्यालय",
    course: "कोर्स",
    keySkills: "प्रमुख कौशल",
    careerOutcomes: "करियर परिणाम",
    noScholarships: "इस पथ के लिए अभी तक कोई विशिष्ट छात्रवृत्ति सूचीबद्ध नहीं है।",
    noStudyAbroad: "इस पथ के लिए अभी तक कोई विशिष्ट विदेश अध्ययन अवसर सूचीबद्ध नहीं है।"
  },
  te: {
    navAbout: "గురించి",
    navExplore: "అన్వేషించండి",
    navParents: "తల్లిదండ్రులు",
    navMentors: "మెంటర్లు",
    heroTitle: "10వ లేదా 12వ తరగతి తర్వాత ఏమి చదవాలో అని ",
    heroTitleHighlight: "అయోమయంలో ఉన్నారా?",
    heroSubtitle: "చింతించకండి, మీరు ఒంటరి వారు కాదు. వందలాది కెరీర్ ఎంపికలను అన్వేషించండి, అవసరమైన పరీక్షలు, నైపుణ్యాలు మరియు అర్హతలను ఒకే చోట అర్థం చేసుకోండి.",
    btn10th: "నేను ఇప్పుడే 10వ తరగతి పూర్తి చేసాను",
    btn12th: "నేను ఇప్పుడే 12వ తరగతి పూర్తి చేసాను",
    freeToUse: "ఉచితంగా ఉపయోగించుకోవచ్చు",
    factualData: "వాస్తవిక డేటా",
    noSignUp: "సైన్-అప్ అవసరం లేదు",
    roadmapTitle: "కెరీర్ రోడ్‌మ్యాప్‌లు",
    roadmapSubtitle: "మీకు అందుబాటులో ఉన్న అత్యంత ప్రజాదరణ పొందిన మరియు అధిక-వృద్ధి కెరీర్ మార్గాలను చూడటానికి మీ ప్రస్తుత స్థాయిని ఎంచుకోండి.",
    searchPlaceholder: "కెరీర్‌లు, నైపుణ్యాలు లేదా ఆసక్తుల కోసం వెతకండి...",
    whatToBecome: "మీరు ఏమి కావాలనుకుంటున్నారు?",
    allOutcomes: "అన్ని కెరీర్ ఫలితాలు",
    allStreams: "అన్ని స్ట్రీమ్‌లు",
    whyWhatsNext: "వాట్స్ నెక్స్ట్ — కెరీర్ డెసిషన్ ఇంజిన్ ఎందుకు?",
    forParents: "తల్లిదండ్రులు & సంరక్షకుల కోసం",
    supportJourney: "వారి ప్రయాణానికి మద్దతు ఇవ్వండి,",
    withoutStress: "ఒత్తిడి లేకుండా.",
    parentSubtitle: "మీ బిడ్డ కోసం మీరు ఉత్తమమైనదాన్ని కోరుకుంటున్నారని మాకు తెలుసు. కెరీర్ ల్యాండ్‌స్కేప్ గణనీయంగా మారింది. సాంప్రదాయ మార్గాలు ఇకపై విజయానికి ఏకైక మార్గం కాదు.",
    exploreTogether: "కలిసి అన్వేషించండి:",
    exploreTogetherDesc: "మీ బిడ్డతో కూర్చుని కేవలం మార్కుల ఆధారంగా కాకుండా వారి ఆసక్తుల ఆధారంగా ఎంపికలను చూడండి.",
    understandReq: "అవసరాలను అర్థం చేసుకోండి:",
    understandReqDesc: "డేటా సైన్స్ లేదా డిజైన్ వంటి ఆధునిక ఉద్యోగాలకు సరిగ్గా ఏ పరీక్షలు మరియు నైపుణ్యాలు అవసరమో చూడండి.",
    footerSubtitle: "డేటా-ఆధారిత కెరీర్ రోడ్‌మ్యాప్‌లు మరియు నిపుణుల మార్గదర్శకత్వంతో తదుపరి తరం నిపుణులను శక్తివంతం చేయడం.",
    navigation: "నావిగేషన్",
    explore: "అన్వేషించండి",
    parents: "తల్లిదండ్రులు",
    about: "గురించి",
    connect: "కనెక్ట్ అవ్వండి",
    allRightsReserved: "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
    privacy: "గోపనీయత పాలసీ",
    terms: "సేవా నిబంధనలు",
    choosePath: "కెరీర్ మార్గాన్ని ఎంచుకోండి",
    in: "లో",
    list: "జాబితా",
    map: "మ్యాప్",
    exploreRoadmap: "రోడ్‌మ్యాప్‌ను అన్వేషించండి",
    backToExplore: "అన్వేషణకు తిరిగి వెళ్లండి",
    overview: "అవలోకనం",
    exams: "ప్రవేశ పరీక్షలు",
    degrees: "టాప్ డిగ్రీలు",
    jobs: "కెరీర్ ఫలితాలు (ఉద్యోగాలు)",
    scholarships: "స్కాలర్‌షిప్‌లు & ఆర్థిక సహాయం",
    studyAbroad: "విదేశీ విద్యా అవకాశాలు",
    growthTrends: "వృద్ధి & జీతాల పోకడలు",
    salaryProgression: "జీతం పురోగతి (LPA)",
    yearsExperience: "అనుభవ సంవత్సరాలు",
    country: "దేశం",
    university: "విశ్వవిద్యాలయం",
    course: "కోర్సు",
    keySkills: "ముఖ్య నైపుణ్యాలు",
    careerOutcomes: "కెరీర్ ఫలితాలు",
    noScholarships: "ఈ మార్గం కోసం ఇంకా నిర్దిష్ట స్కాలర్‌షిప్‌లు జాబితా చేయబడలేదు.",
    noStudyAbroad: "ఈ మార్గం కోసం ఇంకా నిర్దిష్ట విదేశీ విద్యా అవకాశాలు జాబితా చేయబడలేదు."
  }
};


export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<"10th" | "12th">("10th");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<keyof typeof translations>("en");

  const t = translations[language];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const streams = selectedLevel === "10th" ? after10thStreams : after12thStreams;

  const categories = useMemo(() => {
    const cats = new Set(streams.map(s => s.category));
    return Array.from(cats);
  }, [streams]);

  const allOutcomes = useMemo(() => {
    const outcomes = new Set<string>();
    streams.forEach(stream => {
      stream.paths.forEach(path => {
        path.outcomes.forEach(outcome => outcomes.add(outcome));
      });
    });
    return Array.from(outcomes).sort();
  }, [streams]);

  const filteredStreams = useMemo(() => {
    if (!selectedCategory) return streams;
    return streams.filter(s => s.category === selectedCategory);
  }, [streams, selectedCategory]);

  const handleLevelChange = (level: "10th" | "12th") => {
    setSelectedLevel(level);
    setSelectedCategory(null);
    setSelectedStream(null);
    setSelectedPath(null);
    setSelectedOutcome(null);
    setSearchQuery("");
  };

  const handleStreamSelect = (stream: Stream) => {
    setSelectedStream(stream);
    setSelectedPath(null);
    setSelectedOutcome(null);
    setSearchQuery("");
    
    // Scroll to the paths section so the user knows something happened (on all devices)
    setTimeout(() => {
      const element = document.getElementById('paths-section');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  // Flatten all paths for the current level (optionally filtered by category)
  const allPathsInLevel = useMemo(() => {
    const targetStreams = selectedCategory ? streams.filter(s => s.category === selectedCategory) : streams;
    return targetStreams.flatMap(stream => 
      stream.paths.map(path => ({ ...path, streamId: stream.id, streamTitle: stream.title }))
    );
  }, [streams, selectedCategory]);

  const isSearching = searchQuery !== "";

  // Filter logic
  const filteredPaths = useMemo(() => {
    // If searching, search across all paths in the level
    // If not searching but a stream is selected, show only that stream's paths
    // If an outcome is selected, show paths that lead to that outcome
    // Otherwise, show all paths (or we can hide them in the UI)
    let basePaths = (isSearching || !selectedStream) ? allPathsInLevel : selectedStream.paths;

    if (selectedOutcome) {
      basePaths = allPathsInLevel.filter(path => 
        path.outcomes.some(o => o.toLowerCase() === selectedOutcome.toLowerCase())
      );
    }

    return basePaths.filter(path => {
      const matchesSearch = 
        searchQuery === "" ||
        path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        path.outcomes.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));
        
      return matchesSearch;
    });
  }, [allPathsInLevel, searchQuery, selectedStream, isSearching, selectedOutcome]);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-900 font-sans selection:bg-indigo-200">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[60] h-12 w-12 rounded-full bg-slate-900 text-white shadow-2xl flex items-center justify-center hover:bg-indigo-600 transition-colors border border-white/20"
          >
            <ChevronRight className="h-6 w-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Premium Glassmorphism Header */}
      <header className="glass sticky top-0 z-50 shadow-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => {
              setSelectedStream(null);
              setSelectedPath(null);
              setSearchQuery("");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-primary p-2 rounded-xl group-hover:bg-indigo-600 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/20">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-lg sm:text-2xl tracking-tighter text-foreground font-sans">What's Next <span className="text-primary hidden sm:inline">— Career Decision Engine</span></span>
          </motion.div>
          <nav className="hidden lg:flex gap-10">
            {['Explore', 'Parents', 'About'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {t[item.toLowerCase() as keyof typeof t]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="h-9 w-9 rounded-lg text-muted-foreground hover:text-primary"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
              <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
                <SelectTrigger className="h-9 border-none bg-transparent shadow-none focus:ring-0 text-[10px] font-black uppercase tracking-widest w-12 sm:w-20">
                  <div className="flex items-center gap-1.5">
                    <Languages className="h-3 w-3" />
                    <span className="hidden sm:inline">{language.toUpperCase()}</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी</SelectItem>
                  <SelectItem value="te">తెలుగు</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="ghost" className="hidden sm:flex text-muted-foreground font-bold text-sm hover:bg-slate-100/50 dark:hover:bg-slate-800/50">{t.logIn}</Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-4 sm:px-6 h-10 sm:h-11 shadow-xl shadow-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 text-xs sm:text-sm">
              {t.joinNow}
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Enhanced Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80" 
            alt="Students studying"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-slate-900/80 to-slate-900/40"></div>
          
          {/* Animated background elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-2xl"
            >
              {t.heroTitle} <span className="text-indigo-400 relative inline-block">
                <span className="relative z-10">{t.heroTitleHighlight}</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-2 sm:h-3 bg-indigo-500/50 -z-10 -rotate-2"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-medium px-4"
            >
              {t.heroSubtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10 px-4"
            >
              <Button 
                size="lg" 
                className="h-12 sm:h-14 px-8 text-sm sm:text-base rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-2xl shadow-indigo-500/20 transition-all duration-300 hover:scale-105 active:scale-95 border-none"
                onClick={() => {
                  document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
                  handleLevelChange("10th");
                }}
              >
                {t.btn10th}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 sm:h-14 px-8 text-sm sm:text-base rounded-2xl border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => {
                  document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
                  handleLevelChange("12th");
                }}
              >
                {t.btn12th}
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-300 px-4"
            >
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 w-5 text-indigo-400" /> {t.freeToUse}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 w-5 text-indigo-400" /> {t.factualData}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 w-5 text-indigo-400" /> {t.noSignUp}</div>
            </motion.div>
          </div>
        </section>


        {/* Exploration Engine - Clean, Student-Friendly UI */}
        <section id="explore" className="py-16 bg-white dark:bg-slate-950 relative transition-colors duration-300">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter font-sans">{t.roadmapTitle}</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                {t.roadmapSubtitle}
              </p>
            </motion.div>

            {/* Level Selector Tabs */}
            <div className="flex justify-center mb-12 w-full">
              <div className="bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm p-2 rounded-2xl flex w-full sm:w-auto shadow-inner border border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={() => handleLevelChange("10th")}
                  className={`flex-1 sm:flex-none px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                    selectedLevel === "10th" 
                      ? "bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 shadow-xl scale-[1.02]" 
                      : "text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {language === 'en' ? 'After 10th' : t.btn10th}
                </button>
                <button
                  onClick={() => handleLevelChange("12th")}
                  className={`flex-1 sm:flex-none px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                    selectedLevel === "12th" 
                      ? "bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 shadow-xl scale-[1.02]" 
                      : "text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {language === 'en' ? 'After 12th' : t.btn12th}
                </button>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    type="text" 
                    placeholder={t.searchPlaceholder} 
                    className="pl-10 pr-10 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-base focus-visible:ring-indigo-500 text-slate-900 dark:text-slate-100"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedStream(null);
                      setSelectedPath(null);
                    }}
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedOutcome(null);
                      setSelectedStream(null);
                      setSelectedCategory(null);
                    }}
                    disabled={!isSearching && !selectedOutcome && !selectedStream && !selectedCategory}
                    className="h-12 rounded-xl px-6 font-bold uppercase tracking-wider text-xs"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>

            {isSearching && (
              <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between px-4">
                <div className="text-sm font-bold text-slate-500">
                  Showing <span className="text-indigo-600">{filteredPaths.length}</span> results
                </div>
                {filteredPaths.length === 0 && (
                  <div className="text-sm text-slate-400 italic">Try adjusting your filters</div>
                )}
              </div>
            )}

            {/* What do you want to become? Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
                  <Target className="h-6 w-6 text-indigo-500" />
                  {t.whatToBecome}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-h-48 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-slate-700">
                <button
                  onClick={() => setSelectedOutcome(null)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                    selectedOutcome === null
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-300"
                  }`}
                >
                  {t.allOutcomes}
                </button>
                {allOutcomes.map((outcome) => (
                  <button
                    key={outcome}
                    onClick={() => {
                      setSelectedOutcome(outcome);
                      setSelectedStream(null);
                      setSelectedCategory(null);
                      setSearchQuery("");
                      
                      // Scroll to results
                      setTimeout(() => {
                        const element = document.getElementById('paths-section');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                      selectedOutcome === outcome
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-300"
                    }`}
                  >
                    {outcome}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Streams Column (Left) - Visual Grid */}
              {!isSearching && (
                <div className="lg:col-span-12 mb-12">
                  {/* Category Filter */}
                  <div className="flex flex-wrap items-center gap-3 mb-10 justify-center">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedStream(null);
                        setSelectedOutcome(null);
                      }}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                        selectedCategory === null
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none"
                          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300"
                      }`}
                    >
                      {t.allStreams}
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedStream(null);
                          setSelectedOutcome(null);
                        }}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                          selectedCategory === cat
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none"
                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-8 px-2">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{t.chooseInterest}</h3>
                    <div className="h-px flex-grow ml-4 bg-slate-100 dark:bg-slate-800"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {filteredStreams.map((stream, index) => (
                      <motion.button
                        key={stream.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                        onClick={() => handleStreamSelect(stream)}
                        className={`group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 overflow-hidden aspect-square ${
                          selectedStream?.id === stream.id
                            ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.05] z-10 ring-4 ring-primary/20"
                            : "glass-card text-muted-foreground hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl border-white/50 dark:border-slate-800/50"
                        }`}
                        whileHover={{ y: -8, scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {selectedStream?.id === stream.id && (
                          <motion.div 
                            layoutId="activeStream"
                            className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-500 to-accent opacity-100 -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {/* Magic glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_50%)] mix-blend-overlay pointer-events-none"></div>
                        
                        <div className={`p-3 sm:p-4 rounded-2xl mb-2 sm:mb-3 transition-all duration-500 ${
                          selectedStream?.id === stream.id ? "bg-white/20 rotate-12 scale-110 shadow-inner" : "bg-muted dark:bg-slate-800 group-hover:bg-primary/10 group-hover:-rotate-12 group-hover:scale-110"
                        }`}>
                          <GraduationCap className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300 ${selectedStream?.id === stream.id ? "text-white" : "text-muted-foreground group-hover:text-primary"}`} />
                        </div>
                        <div className="text-center relative z-10">
                          <div className="font-black text-[10px] sm:text-xs uppercase tracking-wider leading-tight mb-1">{stream.title}</div>
                          <div className={`text-[8px] sm:text-[10px] font-bold transition-colors duration-300 ${selectedStream?.id === stream.id ? "text-primary-foreground/90" : "text-muted-foreground/60 group-hover:text-primary/70"}`}>
                            {stream.paths.length} Paths
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paths Column (Right) */}
              <div id="paths-section" className="lg:col-span-12">
                <AnimatePresence mode="wait">
                  {selectedPath ? (
                    <motion.div
                      key="path-details"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
                    >
                      {/* Detail Header */}
                      <div className="relative h-56 sm:h-80 overflow-hidden">
                        <img 
                          src={selectedPath.imageUrl} 
                          alt={selectedPath.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                        
                        <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between">
                          <button 
                            onClick={() => setSelectedPath(null)}
                            className="text-[10px] sm:text-sm font-bold text-white flex items-center gap-1.5 transition-all bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/20 w-fit border border-white/20"
                          >
                            &larr; {t.backToExplore}
                          </button>
                          
                          <div className="relative">
                            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                              <div className="p-2 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20">
                                {(() => {
                                  const Icon = iconMap[selectedPath.icon] || GraduationCap;
                                  return <Icon className="h-5 w-5 sm:h-10 sm:w-10 text-white" />;
                                })()}
                              </div>
                              <div>
                                <Badge className="mb-1 sm:mb-2 bg-indigo-500 text-white border-none text-[8px] sm:text-xs">{t.topCareerPath}</Badge>
                                <h2 className="text-xl sm:text-5xl font-black text-white tracking-tighter leading-tight">{selectedPath.title}</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 sm:p-8 bg-white dark:bg-slate-900">
                        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed mb-8 font-medium">
                          {selectedPath.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                        
                        {/* Qualifications */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="bg-slate-200 dark:bg-slate-700 p-1.5 rounded-md"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-300" /></div>
                            {t.requiredQuals}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {selectedPath.qualifications.map((q, i) => (
                              <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                                <span className="leading-relaxed">{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exams */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="bg-slate-200 dark:bg-slate-700 p-1.5 rounded-md"><FileText className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-300" /></div>
                            {t.entranceExams}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPath.exams.map((exam, i) => (
                              <Badge key={i} variant="secondary" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 px-3 py-1.5 text-[10px] sm:text-sm font-medium shadow-sm">
                                {exam}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="bg-slate-200 dark:bg-slate-700 p-1.5 rounded-md"><Brain className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-300" /></div>
                            {t.keySkills}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPath.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 text-[10px] sm:text-sm font-medium shadow-sm">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <div className="bg-slate-200 dark:bg-slate-700 p-1.5 rounded-md"><Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-300" /></div>
                            {t.careerOutcomes}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {selectedPath.outcomes.map((outcome, i) => (
                              <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3 bg-white dark:bg-slate-800 p-2.5 sm:p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Salary Trends Chart */}
                        <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <div className="bg-slate-200 dark:bg-slate-700 p-1.5 rounded-md"><TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-300" /></div>
                            {t.growthTrends}
                          </h4>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner">
                            {selectedPath.growthData ? (
                              <>
                                <CareerChart data={selectedPath.growthData} />
                                <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-widest font-bold">
                                  {t.salaryProgression}
                                </p>
                              </>
                            ) : (
                              <div className="h-64 flex items-center justify-center text-slate-400 text-sm italic">
                                Data for salary trends will be updated soon.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  ) : (isSearching || selectedStream || selectedCategory || selectedOutcome) ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {filteredPaths.map((path) => {
                        const Icon = iconMap[path.icon] || GraduationCap;
                        return (
                          <motion.div
                            key={path.id}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Card 
                              className="cursor-pointer hover:shadow-2xl transition-all duration-500 group border-slate-200 h-full flex flex-col overflow-hidden rounded-[2rem] glow-hover glass-card relative"
                              onClick={() => setSelectedPath(path)}
                            >
                              {/* Magic glow effect on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none z-10"></div>

                              <div className="h-48 w-full relative overflow-hidden">
                                <img 
                                  src={path.imageUrl} 
                                  alt={path.title} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-20">
                                  <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Icon className="h-6 w-6" />
                                  </div>
                                </div>
                                {/* Trend indicator */}
                                <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-2">
                                  <TrendingUp className="h-3 w-3 text-green-400" />
                                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Growing</span>
                                </div>
                              </div>
                              <CardHeader className="p-6 flex-grow relative z-20">
                                <Badge variant="secondary" className="mb-2 w-fit bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 text-[10px] font-bold uppercase tracking-widest">
                                  {path.skills[0]}
                                </Badge>
                                <CardTitle className="text-xl font-bold mb-2 text-slate-900 group-hover:text-indigo-700 transition-colors tracking-tight">{path.title}</CardTitle>
                                <CardDescription className="text-sm text-slate-500 leading-relaxed">
                                  {path.description}
                                </CardDescription>
                              </CardHeader>
                              <div className="px-6 pb-6 pt-0 mt-auto relative z-20">
                                <div className="flex items-center text-sm font-bold text-indigo-600 group-hover:text-indigo-700 uppercase tracking-wider">
                                  {t.exploreRoadmap} <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-full mb-6">
                        <GraduationCap className="h-12 w-12 text-indigo-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.chooseInterest}</h3>
                      <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                        Select a stream above or use the search bar to explore career roadmaps.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
  </div>
</div>
</section>

        {/* Parents Section */}
        <motion.section 
          id="parents" 
          className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-white/50 dark:border-slate-800/50 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center overflow-hidden relative transition-colors duration-300">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="lg:w-1/2 relative z-10">
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{t.forParents}</Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[1.1]">{t.supportJourney} <br /><span className="text-primary italic font-serif">{t.withoutStress}</span></h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  {t.parentSubtitle}
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium"><strong>{t.exploreTogether}</strong> {t.exploreTogetherDesc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium"><strong>{t.understandReq}</strong> {t.understandReqDesc}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Parent and student discussing career options" 
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative element */}
                <motion.div 
                  animate={{ rotate: [12, 15, 12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-muted rotate-12 hidden sm:block z-20"
                >
                  <Lightbulb className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 py-12 sm:py-16 border-t border-muted dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary p-3 rounded-2xl shadow-2xl shadow-primary/20">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="font-black text-2xl sm:text-3xl tracking-tighter text-foreground dark:text-white font-sans">What's Next <span className="text-primary">— Career Decision Engine</span></span>
              </div>
              <p className="text-muted-foreground dark:text-slate-400 text-lg font-medium max-w-md leading-relaxed">
                {t.footerSubtitle}
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-foreground dark:text-white mb-8">{t.navigation}</h4>
              <ul className="space-y-4 text-sm font-black text-muted-foreground dark:text-slate-400 uppercase tracking-widest">
                <li><a href="#explore" className="hover:text-primary transition-colors">{t.explore}</a></li>
                <li><a href="#parents" className="hover:text-primary transition-colors">{t.parents}</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">{t.about}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-foreground dark:text-white mb-8">{t.connect}</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-muted dark:border-slate-800 hover:bg-muted/50 dark:hover:bg-slate-800 transition-all">
                  <Globe className="h-5 w-5 text-foreground dark:text-slate-300" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-muted dark:border-slate-800 hover:bg-muted/50 dark:hover:bg-slate-800 transition-all">
                  <Users className="h-5 w-5 text-foreground dark:text-slate-300" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-muted dark:border-slate-800 hover:bg-muted/50 dark:hover:bg-slate-800 transition-all">
                  <Award className="h-5 w-5 text-foreground dark:text-slate-300" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-muted dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} What's Next — Career Decision Engine. {t.allRightsReserved}
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground dark:text-slate-500">
              <a href="#" className="hover:text-primary transition-colors">{t.privacy}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
