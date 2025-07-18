import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import energeticoImage from './assets/energetico_africano_agressivo.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import VslPage from "./pages/VslPage.jsx";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutos em segundos
  const [isBlinking, setIsBlinking] = useState(false)

  // Timer falso de escassez
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Efeito de piscar para criar urgência
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(prev => !prev)
    }, 1000)

    return () => clearInterval(blinkTimer)
  }, [])

  const questions = [
    {
      question: "Há quanto tempo sente que perdeu a sua FORÇA MASCULINA?",
      options: [
        "Há mais de 6 meses ",
        "Há alguns meses",
        "Recentemente",
        "Nunca tive problemas"
      ]
    },
    {
      question: "Quantas vezes por semana a sua parceira fica INSATISFEITA?",
      options: [
        "Sempre",
        "Quase sempre",
        "Às vezes",
        "Nunca"
      ]
    },
    {
      question: "Qual é o seu MAIOR MEDO na cama?",
      options: [
        "Não conseguir satisfazer",
        "Terminar muito rápido",
        "Não ter energia",
        "Ser comparado com outros"
      ]
    },
    {
      question: "Quanto pagaria para RECUPERAR o seu PODER MASCULINO?",
      options: [
        "Qualquer quantia",
        "Até 7.909kz",
        "Até 9.997kz",
        "Até 29.997kz",
        "Nada"
      ]
    }
  ]

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const navigate = useNavigate();

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`text-6xl font-black mb-6 ${isBlinking ? 'text-yellow-400' : 'text-red-500'} transition-colors duration-500`}>
              🔥 RESULTADO CHOCANTE! 🔥
            </div>
            
            <img src={energeticoImage} alt="Energético Africano" className="mx-auto mb-8 rounded-lg shadow-2xl max-w-md" />
            
            <div className="bg-red-600 border-4 border-yellow-400 rounded-lg p-8 mb-8 shadow-2xl">
              <h2 className="text-4xl font-black mb-4 text-yellow-300">
                ⚠️ DIAGNÓSTICO CRÍTICO ⚠️
              </h2>
              <p className="text-2xl mb-6 font-bold">
                As suas respostas revelam uma DEFICIÊNCIA MASCULINA SEVERA!
              </p>
              <p className="text-xl mb-4">
                Mas NÃO ENTRE EM PÂNICO! Descobrimos o SEGREDO AFRICANO que pode SALVAR a sua vida íntima!
              </p>
            </div>

            <div className="bg-yellow-400 text-black p-6 rounded-lg mb-8 border-4 border-red-600">
              <h3 className="text-3xl font-black mb-4">
                🚨 OFERTA EXCLUSIVA - APENAS HOJE! 🚨
              </h3>
              <p className="text-xl font-bold mb-2">
                ENERGÉTICO AFRICANO - O SEGREDO DOS GUERREIROS MASAI!
              </p>
              <p className="text-lg mb-4">
                ✅ +7CM GARANTIDOS em 30 dias<br/>
                ✅ +3 HORAS de resistência<br/>
                ✅ SATISFAÇÃO TOTAL da parceira<br/>
                ✅ CONFIANÇA MASCULINA EXPLOSIVA
              </p>
              <div className="text-2xl font-black mb-4">
                <span className="line-through text-red-600">9.997kz</span>
                <span className="text-green-600 ml-4">APENAS 5.200kz!</span>
              </div>
              <p className="text-sm font-bold text-red-600">
                DESCONTO DE 84% - VÁLIDO APENAS POR {formatTime(timeLeft)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-700 p-6 rounded-lg border-2 border-yellow-400">
                <h4 className="text-xl font-bold mb-2">⚡ RESULTADOS IMEDIATOS</h4>
                <p>Sinta a diferença na PRIMEIRA DOSE!</p>
              </div>
              <div className="bg-red-700 p-6 rounded-lg border-2 border-yellow-400">
                <h4 className="text-xl font-bold mb-2">🔒 100% NATURAL</h4>
                <p>Fórmula secreta dos GUERREIROS AFRICANOS!</p>
              </div>
              <div className="bg-red-700 p-6 rounded-lg border-2 border-yellow-400">
                <h4 className="text-xl font-bold mb-2">💰 GARANTIA TOTAL</h4>
                <p>Dinheiro de volta se não TRIPLICAR o seu desempenho!</p>
              </div>
            </div>

            <div className="mb-8">
              <Button 
                className={`text-2xl font-black py-6 px-12 rounded-lg transition-all duration-300 ${
                  isBlinking 
                    ? 'bg-yellow-400 text-black border-4 border-red-600 shadow-2xl scale-110' 
                    : 'bg-red-600 text-white border-4 border-yellow-400 shadow-xl'
                }`}
                onClick={() => navigate("/vsl")}
              >
                🔥 QUERO O MEU PODER AFRICANO AGORA! 🔥
              </Button>
            </div>

            <div className="text-center text-yellow-300">
              <p className="text-lg font-bold mb-2">
                ⚠️ ATENÇÃO: Apenas {Math.floor(Math.random() * 7) + 3} unidades restantes!
              </p>
              <p className="text-sm">
                Mais de 50.000 homens já transformaram as suas vidas!
              </p>
            </div>

            <div className="mt-8 text-xs text-gray-400">
               
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header com urgência */}
          <div className="text-center mb-8">
            <div className={`text-4xl font-black mb-4 ${isBlinking ? 'text-yellow-400' : 'text-red-500'} transition-colors duration-500`}>
              🔥 TESTE DE MASCULINIDADE EXTREMO 🔥
            </div>
            <div className="bg-red-600 border-4 border-yellow-400 rounded-lg p-4 mb-6">
              <p className="text-xl font-bold">
                ⏰ TEMPO LIMITADO: {formatTime(timeLeft)}
              </p>
              <p className="text-sm">
                Esta oferta EXPIRA em breve! Não perca a sua ÚLTIMA CHANCE!
              </p>
            </div>
          </div>

          {/* Imagem agressiva */}
          <div className="text-center mb-8">
            <img src={energeticoImage} alt="Poder Africano" className="mx-auto rounded-lg shadow-2xl max-w-sm" />
          </div>

          {/* Progresso do quiz */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span className="text-yellow-400 font-bold">CRÍTICO!</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-red-500 to-yellow-400 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Pergunta atual */}
          <div className="bg-black border-4 border-red-600 rounded-lg p-8 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-300">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-6 text-lg font-bold bg-red-700 hover:bg-red-600 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-200 hover:scale-105"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Avisos de urgência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-yellow-400 text-black p-4 rounded-lg border-2 border-red-600 flex items-center justify-center">
              <p className="font-bold text-center text-sm md:text-base">
                ⚠️ APENAS {Math.floor(Math.random() * 15) + 5} HOMENS ONLINE AGORA!
              </p>
            </div>
            <div className="bg-red-600 p-4 rounded-lg border-2 border-yellow-400 flex items-center justify-center">
              <p className="font-bold text-center text-sm md:text-base">
                🔥 ÚLTIMAS {Math.floor(Math.random() * 8) + 2} UNIDADES DISPONÍVEIS!
              </p>
            </div>
          </div>

          {/* Disclaimer educativo */}
          <div className="text-center text-xs md:text-sm text-gray-400 mt-8 px-2">
            
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal com rotas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizApp />} />
        <Route path="/vsl" element={<VslPage />} />
      </Routes>
    </Router>
  );
}

export default App;