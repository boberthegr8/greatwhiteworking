'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    n: '01',
    title: 'Install the official Stremio app',
    text: 'Use the official Stremio app for your device. On Android TV / Google TV, install Stremio from the Play Store. If it is not available there, use Stremio’s official download page.',
    action: { label: 'Official Stremio Downloads', href: 'https://www.stremio.com/downloads' }
  },
  {
    n: '02',
    title: 'Sign in or create an account',
    text: 'Open Stremio and sign in. Using an account is recommended because your library and installed add-ons can follow you to other supported devices.'
  },
  {
    n: '03',
    title: 'Set up your add-ons',
    text: 'Open Add-ons inside Stremio. Great White will keep this page updated with the current recommended setup. Only use add-ons and content sources you are authorized to access.'
  },
  {
    n: '04',
    title: 'Test it',
    text: 'Open a title you are authorized to watch and confirm that playback works. If you see multiple legitimate sources, choose the source and quality that works best on your connection.'
  },
  {
    n: '05',
    title: 'Remove the old version — only after testing',
    text: 'Once the official Stremio setup is working properly, you can uninstall the older Great White preconfigured version. Do not remove the old version until the new setup has been tested.'
  }
];

export default function StremioBackupPage() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <main style={{minHeight:'100vh',background:'radial-gradient(circle at 50% 0%, #19223b 0%, #0b0f17 40%, #07090d 100%)',color:'#fff',fontFamily:'Arial, sans-serif'}}>
      <div style={{maxWidth:900,margin:'0 auto',padding:'28px 18px 70px'}}>
        <Link href="/install" style={{color:'#9ca3af',textDecoration:'none',fontSize:14}}>← Back to Install Guide</Link>

        <section style={{textAlign:'center',padding:'55px 10px 34px'}}>
          <div style={{display:'inline-block',fontSize:12,fontWeight:800,letterSpacing:1.8,color:'#fbbf24',border:'1px solid #5b4815',background:'#211c0d',borderRadius:999,padding:'8px 13px',marginBottom:20}}>BACKUP / FUTURE SETUP</div>
          <h1 style={{fontSize:'clamp(34px,7vw,58px)',lineHeight:1.02,margin:'0 0 16px',letterSpacing:-1.8}}>Stremio Alternative Setup</h1>
          <p style={{maxWidth:650,margin:'0 auto',fontSize:18,lineHeight:1.55,color:'#c7cbd3'}}>You probably do <b style={{color:'#fff'}}>not</b> need this right now. This page is our backup path for moving from the older preconfigured Stremio version to the official Stremio app.</p>
        </section>

        <div style={{border:'1px solid #374151',background:'linear-gradient(135deg,#171c27,#10141c)',borderRadius:18,padding:'22px 22px',margin:'12px 0 28px',boxShadow:'0 18px 50px rgba(0,0,0,.28)'}}>
          <div style={{display:'flex',gap:14,alignItems:'flex-start'}}>
            <div style={{fontSize:28}}>⚠️</div>
            <div>
              <div style={{fontWeight:900,fontSize:19,marginBottom:6}}>Only use this page if Great White tells you to</div>
              <div style={{color:'#b9c0cb',lineHeight:1.5}}>If your current Stremio is working, leave it alone. This guide is here so we have a clean migration path ready if the old version stops working.</div>
            </div>
          </div>
        </div>

        {!showGuide ? (
          <section style={{textAlign:'center',padding:'35px 20px',border:'1px solid #252c39',borderRadius:22,background:'#0d121b'}}>
            <div style={{fontSize:46,marginBottom:10}}>🎬</div>
            <h2 style={{fontSize:26,margin:'0 0 10px'}}>Need the backup setup?</h2>
            <p style={{color:'#aeb6c2',lineHeight:1.55,maxWidth:560,margin:'0 auto 22px'}}>The normal Great White install remains the recommended setup. Open this guide only when you are migrating to official Stremio.</p>
            <button onClick={()=>setShowGuide(true)} style={{cursor:'pointer',border:0,borderRadius:12,padding:'15px 24px',fontSize:16,fontWeight:900,background:'#fff',color:'#090b10'}}>Show Alternative Setup</button>
          </section>
        ) : (
          <section>
            <div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:15,margin:'38px 2px 18px'}}>
              <div>
                <div style={{color:'#8b93a2',fontSize:13,fontWeight:800,letterSpacing:1.4}}>MIGRATION GUIDE</div>
                <h2 style={{fontSize:30,margin:'5px 0 0'}}>5 simple steps</h2>
              </div>
              <button onClick={()=>setShowGuide(false)} style={{background:'transparent',border:0,color:'#9ca3af',cursor:'pointer'}}>Hide guide</button>
            </div>

            <div style={{display:'grid',gap:13}}>
              {steps.map((s) => (
                <article key={s.n} style={{display:'grid',gridTemplateColumns:'58px 1fr',gap:15,border:'1px solid #252c39',borderRadius:18,padding:'20px',background:'#0d121b'}}>
                  <div style={{width:48,height:48,borderRadius:14,display:'grid',placeItems:'center',fontWeight:900,color:'#a78bfa',background:'#201a38',border:'1px solid #3a2d63'}}>{s.n}</div>
                  <div>
                    <h3 style={{margin:'2px 0 7px',fontSize:20}}>{s.title}</h3>
                    <p style={{margin:0,color:'#b5bdc9',lineHeight:1.55}}>{s.text}</p>
                    {s.action && <a href={s.action.href} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:14,color:'#c4b5fd',fontWeight:800,textDecoration:'none'}}>{s.action.label} →</a>}
                  </div>
                </article>
              ))}
            </div>

            <div style={{marginTop:28,border:'1px solid #243449',borderRadius:18,padding:'22px',background:'#0b1622'}}>
              <div style={{fontWeight:900,fontSize:18,marginBottom:7}}>Great White note</div>
              <div style={{color:'#afbbc9',lineHeight:1.55}}>Stremio itself is a media platform. Community add-ons are made and maintained by third parties and can change or stop working without notice. Great White does not control third-party add-ons. Use only services and content you have the right to access.</div>
            </div>
          </section>
        )}

        <footer style={{textAlign:'center',marginTop:50,color:'#646d7b',fontSize:13}}>Great White Streams • Stremio Backup Guide</footer>
      </div>
    </main>
  );
}
