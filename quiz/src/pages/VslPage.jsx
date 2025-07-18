import React, { useEffect } from "react";

function VslPage() {
  useEffect(() => {
    // Preload e DNS Prefetch
    const links = [
      { rel: "preload", href: "https://scripts.converteai.net/c9eb85da-3dc2-430f-941b-d5dcbe8e9c6e/players/687ac54b239622f1f0c688e8/v4/embed.html" },
      { rel: "preload", href: "https://scripts.converteai.net/c9eb85da-3dc2-430f-941b-d5dcbe8e9c6e/players/687ac54b239622f1f0c688e8/v4/player.js", as: "script" },
      { rel: "preload", href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js", as: "script" },
      { rel: "preload", href: "https://cdn.converteai.net/c9eb85da-3dc2-430f-941b-d5dcbe8e9c6e/687ac118a4393e5dd8e12ff6/main.m3u8", as: "fetch" },
      { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
      { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
      { rel: "dns-prefetch", href: "https://images.converteai.net" },
      { rel: "dns-prefetch", href: "https://api.vturb.com.br" },
    ];
    links.forEach(obj => {
      const link = document.createElement("link");
      Object.entries(obj).forEach(([key, value]) => link.setAttribute(key, value));
      document.head.appendChild(link);
    });

    // Script do player
    const playerScript = document.createElement("script");
    playerScript.src = "https://scripts.converteai.net/c9eb85da-3dc2-430f-941b-d5dcbe8e9c6e/players/687ac54b239622f1f0c688e8/v4/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    return () => {
      // Limpeza dos links e scripts
      links.forEach(obj => {
        const found = document.head.querySelector(`link[href="${obj.href}"]`);
        if (found) document.head.removeChild(found);
      });
      if (playerScript) document.head.removeChild(playerScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-black text-yellow-400 mb-8 text-center drop-shadow-lg">
        O SEGREDO DOS GUERREIROS AFRICANOS!
      </h1>
      <div className="w-full max-w-2xl bg-black p-8 shadow-2xl flex flex-col items-center">
        {/* VSL Player */}
        <vturb-smartplayer
          id="vid-687ac54b239622f1f0c688e8"
          style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: 400 }}
        ></vturb-smartplayer>
        <p className="text-center text-lg text-yellow-300 font-bold mt-4">
          Assista ao vídeo e descubra como transformar sua vida!
        </p>
      </div>
    </div>
  );
}

export default VslPage;