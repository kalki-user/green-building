import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle2, XCircle, RefreshCw, Award, Share2, Building, Leaf, ShieldCheck, Zap, Activity } from 'lucide-react';
import { questions } from '../data/quizData';
import './Techniques.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Scroll to top on question change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion]);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);
  const progressLine = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg" style={{ background: 'linear-gradient(135deg, #2d3436, #1a3a32)', padding: 'clamp(2rem, 10vw, 4rem) 1rem' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', marginBottom: '1.5rem' }}>
             <Zap size={16} color="var(--color-accent)" />
             <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', letterSpacing: '1px' }}>MARATHON MODE: 100 QUESTIONS</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', marginBottom: '1rem' }}>Green Pro Quiz</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', opacity: 0.9 }}>
            The definitive 100-question academic assessment covering the entire Green Build Encyclopedia.
          </p>
        </div>
      </div>

      {/* Progress Bar Fixed at Top (Below Nav) */}
      {!showResults && (
         <div style={{ position: 'sticky', top: '70px', left: 0, right: 0, height: '6px', backgroundColor: 'var(--color-border)', zIndex: 90 }}>
            <div style={{ width: `${progressLine}%`, height: '100%', backgroundColor: 'var(--color-secondary)', transition: 'width 0.4s ease' }}></div>
         </div>
      )}

      <div className="container" style={{ padding: 'clamp(1.5rem, 5vw, 3rem) 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {!showResults ? (
            <div className="glass-elite" style={{ padding: 'clamp(1.25rem, 5vw, 2.5rem)', borderRadius: '32px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <Activity size={18} color="var(--color-primary)" />
                     <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '0.9rem' }}>QUESTION {currentQuestion + 1} / {questions.length}</span>
                  </div>
                  <div style={{ padding: '6px 15px', backgroundColor: 'var(--color-bg)', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600 }}>Accuracy: {percentage}%</div>
               </div>

               <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', lineHeight: '1.4', marginBottom: '2.5rem', fontWeight: 700 }}>{questions[currentQuestion].text}</h2>

               <div style={{ display: 'grid', gap: '1rem' }}>
                  {questions[currentQuestion].options.map(opt => {
                    let style = { padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'all 0.3s', textAlign: 'left', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', backgroundColor: 'white' };
                    
                    if (isAnswered) {
                      if (opt === questions[currentQuestion].answer) {
                        style = { ...style, backgroundColor: '#c6f6d5', borderColor: '#38a169', color: '#276749' };
                      } else if (opt === selectedOption) {
                        style = { ...style, backgroundColor: '#fed7d7', borderColor: '#e53e3e', color: '#9b2c2c' };
                      } else {
                        style = { ...style, opacity: 0.5 };
                      }
                    }

                    return (
                       <button key={opt} onClick={() => handleAnswer(opt)} style={style} disabled={isAnswered}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                             {opt}
                             {isAnswered && opt === questions[currentQuestion].answer && <CheckCircle2 size={20} style={{ minWidth: '20px' }} />}
                             {isAnswered && opt === selectedOption && opt !== questions[currentQuestion].answer && <XCircle size={20} style={{ minWidth: '20px' }} />}
                          </div>
                       </button>
                    );
                  })}
               </div>

               {isAnswered && (
                  <div className="animate-fade-in" style={{ marginTop: '2.5rem' }}>
                     <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', marginBottom: '2rem' }}>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.8 }}><strong>Explanation:</strong> {questions[currentQuestion].explanation}</p>
                     </div>
                     <button 
                        onClick={handleNext}
                        style={{ width: '100%', padding: '15px', borderRadius: '40px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '1.1rem' }}
                     >
                        {currentQuestion + 1 === questions.length ? "Finish Assessment" : "Next Question"}
                     </button>
                  </div>
               )}
            </div>
          ) : (
            <div className="animate-fade-in">
               
               {percentage >= 80 ? (
                  <div id="certificate" style={{ padding: 'clamp(1rem, 5vw, 4rem)', backgroundColor: 'white', borderRadius: '24px', position: 'relative', border: 'clamp(5px, 4vw, 20px) solid var(--color-primary)', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                     <div style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.05 }}><ShieldCheck size={80} /></div>
                     <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.05 }}><ShieldCheck size={80} /></div>
                     
                     <Award color="var(--color-secondary)" size={48} style={{ marginBottom: '1.5rem' }} />
                     <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(1.4rem, 6vw, 3rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>Certificate of Achievement</h1>
                     <p style={{ fontSize: 'clamp(0.85rem, 3vw, 1.2rem)', marginBottom: '2rem' }}>This is to certify that you have successfully completed the</p>
                     <h2 style={{ fontSize: 'clamp(1.1rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '2rem' }}>Green Building Practitioner Assessment</h2>
                     
                     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', marginBottom: '2rem' }}>
                        <div>
                           <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Score Achieved</div>
                           <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{percentage}%</div>
                        </div>
                        <div>
                           <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Status</div>
                           <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38a169' }}>CERTIFIED</div>
                        </div>
                     </div>

                     <div style={{ borderTop: '2px solid var(--color-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ opacity: 0.5, fontSize: '0.8rem' }}>EcoNirmithi Educational Portal</div>
                        <div style={{ fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '2px', fontSize: '0.8rem' }}>VERIFIED</div>
                     </div>
                  </div>
               ) : (
                  <div className="glass-elite" style={{ padding: 'clamp(2rem, 8vw, 4rem)', borderRadius: '32px', textAlign: 'center' }}>
                     <Trophy size={60} style={{ opacity: 0.2, marginBottom: '2rem' }} />
                     <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Almost there!</h2>
                     <p style={{ margin: '1rem 0 3rem', opacity: 0.6 }}>You scored {percentage}%. You need at least 80% to earn your practitioner certificate.</p>
                     <button 
                        onClick={() => {
                          setCurrentQuestion(0);
                          setScore(0);
                          setShowResults(false);
                          setIsAnswered(false);
                        }}
                        style={{ padding: '15px 40px', borderRadius: '40px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', margin: '0 auto' }}
                     >
                        <RefreshCw size={18} /> Retake Marathon
                     </button>
                  </div>
               )}

               <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
                  <button onClick={() => window.print()} className="glass" style={{ padding: '12px 25px', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <Share2 size={18} /> Print / Share Certificate
                  </button>
               </div>
            </div>
          ) /* end result */ }

        </div>
      </div>
    </div>

  );
};

export default Quiz;
