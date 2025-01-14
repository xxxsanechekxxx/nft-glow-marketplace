import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Trophy, Wallet, TrendingUp, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NFT_DATA } from "@/data/nfts";
import { NFTCard } from "@/components/NFTCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const statsRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(benefitsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(statsRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(featuredRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Total Volume", value: "$100M+", icon: TrendingUp },
    { label: "NFTs Created", value: "1M+", icon: Star },
  ];

  const featuredNFTs = NFT_DATA.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 animate-gradient"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block animate-bounce bg-primary/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Welcome to the Future of Digital Art
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-400 animate-fade-in">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in backdrop-blur-sm">
              NFTverse is the world's first and largest NFT marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-primary/90 hover:bg-primary/100 backdrop-blur-sm group relative overflow-hidden">
                <Link to="/marketplace" className="flex items-center gap-2">
                  <span className="relative z-10">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-primary/20 hover:bg-primary/10 group">
                Create
                <Star className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with enhanced design */}
      <div className="py-16 bg-secondary/5 relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} 
                className="text-center p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-2">{stat.value}</div>
                <div className="text-muted-foreground group-hover:text-primary/80 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured NFTs Section with enhanced carousel */}
      <div className="py-24 bg-background relative overflow-hidden" ref={featuredRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Featured Collections
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredNFTs.map((nft) => (
                <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <NFTCard {...nft} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/80 backdrop-blur-sm border-primary/20" />
            <CarouselNext className="bg-background/80 backdrop-blur-sm border-primary/20" />
          </Carousel>
        </div>
      </div>

      {/* Platform Benefits Section with enhanced cards */}
      <div className="py-24 bg-secondary/5 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920')] bg-cover bg-fixed opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 
            ref={benefitsRef}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
          >
            Why Choose NFTverse?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure Platform", description: "Advanced security measures to protect your digital assets and transactions" },
              { icon: Zap, title: "Lightning Fast", description: "Quick transactions and seamless trading experience on the Ethereum network" },
              { icon: Trophy, title: "Exclusive NFTs", description: "Access to unique and rare digital collectibles from top creators" },
              { icon: Wallet, title: "Low Fees", description: "Competitive transaction fees to maximize your trading profits" }
            ].map((benefit, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative">
                  <benefit.icon className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary/80 transition-colors relative">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;