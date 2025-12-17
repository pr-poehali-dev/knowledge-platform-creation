import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface QuizProps {
  onNavigate: (page: 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz') => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export function Quiz({ onNavigate }: QuizProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: 'Что такое HTML?',
      options: [
        'Язык программирования',
        'Язык разметки гипертекста',
        'База данных',
        'Фреймворк для JavaScript',
      ],
      correctAnswer: 1,
      explanation: 'HTML (HyperText Markup Language) — это язык разметки, используемый для создания структуры веб-страниц.',
      category: 'Веб-разработка',
    },
    {
      id: 2,
      question: 'Какой метод используется для добавления элемента в конец массива в JavaScript?',
      options: ['append()', 'push()', 'add()', 'insert()'],
      correctAnswer: 1,
      explanation: 'Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива.',
      category: 'JavaScript',
    },
    {
      id: 3,
      question: 'Что означает CSS?',
      options: [
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Creative Style System',
        'Colorful Style Sheets',
      ],
      correctAnswer: 1,
      explanation: 'CSS (Cascading Style Sheets) — каскадные таблицы стилей, используемые для оформления веб-страниц.',
      category: 'Веб-разработка',
    },
    {
      id: 4,
      question: 'Какой хук React используется для управления состоянием компонента?',
      options: ['useEffect', 'useState', 'useContext', 'useReducer'],
      correctAnswer: 1,
      explanation: 'useState — основной хук для добавления состояния в функциональные компоненты React.',
      category: 'React',
    },
    {
      id: 5,
      question: 'Что такое API?',
      options: [
        'Application Programming Interface',
        'Advanced Programming Integration',
        'Automated Process Interface',
        'Application Process Integration',
      ],
      correctAnswer: 0,
      explanation: 'API (Application Programming Interface) — интерфейс программирования приложений, набор методов для взаимодействия между программами.',
      category: 'Веб-разработка',
    },
  ];

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  const getScorePercentage = () => {
    return Math.round((calculateScore() / questions.length) * 100);
  };

  if (!quizStarted) {
    return (
      <div className="p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Brain" size={40} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl mb-2">Проверка знаний</CardTitle>
                <CardDescription className="text-base">
                  Пройдите тест и проверьте свои знания по веб-разработке
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="HelpCircle" size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Вопросов</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">~10</div>
                  <div className="text-sm text-muted-foreground">Минут</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="Award" size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">100</div>
                  <div className="text-sm text-muted-foreground">Баллов</div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Info" size={18} className="text-primary" />
                  Правила тестирования
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-0.5" />
                    <span>На каждый вопрос есть только один правильный ответ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-0.5" />
                    <span>После выбора ответа вы увидите правильное решение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-0.5" />
                    <span>По завершении теста вы получите детальный отчет</span>
                  </li>
                </ul>
              </div>

              <Button onClick={handleStartQuiz} size="lg" className="w-full">
                <Icon name="Play" className="mr-2" />
                Начать тестирование
              </Button>

              <Button onClick={() => onNavigate('home')} variant="outline" className="w-full">
                <Icon name="ArrowLeft" className="mr-2" />
                Вернуться на главную
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = getScorePercentage();
    const passed = percentage >= 70;

    return (
      <div className="p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                passed ? 'bg-accent' : 'bg-orange-500'
              }`}>
                <Icon name={passed ? 'Trophy' : 'Target'} size={48} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl mb-2">
                  {passed ? 'Поздравляем!' : 'Тест завершен'}
                </CardTitle>
                <CardDescription className="text-base">
                  {passed 
                    ? 'Вы успешно прошли тестирование!' 
                    : 'Продолжайте учиться, и результат улучшится'}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
                <div className="text-lg text-muted-foreground">
                  {score} из {questions.length} правильных ответов
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Результаты по вопросам:</h3>
                {questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg border-2 ${
                        isCorrect ? 'border-accent bg-accent/5' : 'border-orange-500 bg-orange-500/5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon
                          name={isCorrect ? 'CheckCircle' : 'XCircle'}
                          className={isCorrect ? 'text-accent' : 'text-orange-500'}
                          size={24}
                        />
                        <div className="flex-1">
                          <h4 className="font-medium mb-1 content-text">{question.question}</h4>
                          <div className="text-sm text-muted-foreground">
                            {!isCorrect && (
                              <p className="mb-1">
                                Ваш ответ: <span className="font-medium">{question.options[userAnswer!]}</span>
                              </p>
                            )}
                            <p>
                              Правильный ответ: <span className="font-medium text-accent">{question.options[question.correctAnswer]}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <Button onClick={handleStartQuiz} size="lg" className="flex-1">
                  <Icon name="RotateCcw" className="mr-2" />
                  Пройти заново
                </Button>
                <Button onClick={() => onNavigate('home')} variant="outline" size="lg" className="flex-1">
                  <Icon name="Home" className="mr-2" />
                  На главную
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm">
            {question.category}
          </Badge>
          <div className="text-sm text-muted-foreground">
            Вопрос {currentQuestion + 1} из {questions.length}
          </div>
        </div>

        <div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl content-text">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              disabled={showResult}
            >
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctAnswer;
                  const showCorrect = showResult && isCorrect;
                  const showIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        showCorrect
                          ? 'border-accent bg-accent/10'
                          : showIncorrect
                          ? 'border-orange-500 bg-orange-500/10'
                          : isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                      }`}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option}
                      </Label>
                      {showCorrect && <Icon name="CheckCircle" className="text-accent" size={24} />}
                      {showIncorrect && <Icon name="XCircle" className="text-orange-500" size={24} />}
                    </div>
                  );
                })}
              </div>
            </RadioGroup>

            {showResult && (
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" />
                  Объяснение
                </h4>
                <p className="text-sm text-muted-foreground content-text">{question.explanation}</p>
              </div>
            )}

            {!showResult && (
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                size="lg"
                className="w-full"
              >
                {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
