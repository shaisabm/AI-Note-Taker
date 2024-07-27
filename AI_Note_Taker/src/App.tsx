import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, ListGroup, Card, Navbar, Nav, Accordion } from 'react-bootstrap';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FaMicrophone, FaFileAlt, FaListUl, FaPencilAlt, FaQuestionCircle, FaEnvelope, FaPlay, FaStop, FaSave, FaRobot } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import aiNoteImage from './10-Best-AI-Note-Taking-App-in-2023-1.jpg';
import noteTakingImage from './Note-Taking-color-800px.png';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EduScribe AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/note-taker">Start Taking Notes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const iconAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: inView ? 'scale(1)' : 'scale(0)' },
    config: { tension: 200, friction: 12 },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { contactName, contactEmail, contactMessage });
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div className="landing-page">
      <Container>
        <animated.div style={heroAnimation} className="hero-section text-center py-5">
          <FaPencilAlt size={50} color="#007bff" className="mb-3" />
          <h1 className="display-4">EduScribe AI</h1>
          <p className="lead">Revolutionize your lectures with AI-powered note-taking</p>
          <Button onClick={() => navigate('/note-taker')} variant="primary" size="lg" className="mt-3">
            Start Taking Notes
          </Button>
        </animated.div>

        <Row className="align-items-center my-5">
          <Col md={6}>
            <animated.div style={heroAnimation}>
              <h2>Focus on teaching while we capture every insight</h2>
              <p>EduScribe AI uses advanced technology to transcribe, summarize, and organize your lectures in real-time.</p>
            </animated.div>
          </Col>
          <Col md={6}>
            <animated.img 
              src={aiNoteImage}
              alt="AI Note Taking" 
              className="img-fluid"
              style={heroAnimation}
            />
          </Col>
        </Row>

        <Row className="features-section" ref={ref}>
          <Col md={4}>
            <animated.div style={fadeIn} className="feature-card">
              <animated.div style={iconAnimation} className="feature-icon">
                <FaMicrophone size={50} color="#007bff" />
              </animated.div>
              <h3>Real-time Transcription</h3>
              <p>Capture every word with our advanced speech-to-text technology.</p>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={fadeIn} className="feature-card">
              <animated.div style={iconAnimation} className="feature-icon">
                <FaFileAlt size={50} color="#28a745" />
              </animated.div>
              <h3>AI-powered Summaries</h3>
              <p>Get concise summaries of your lectures with just one click.</p>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={fadeIn} className="feature-card">
              <animated.div style={iconAnimation} className="feature-icon">
                <FaListUl size={50} color="#ffc107" />
              </animated.div>
              <h3>Smart Action Items</h3>
              <p>Automatically generate to-do lists for students based on lecture content.</p>
            </animated.div>
          </Col>
        </Row>

        <Row className="faqs-section my-5" ref={ref}>
          <Col md={4}>
            <animated.div style={fadeIn} className="text-center">
              <FaQuestionCircle size={50} color="#007bff" className="mb-3" />
              <h2>Frequently Asked Questions</h2>
            </animated.div>
          </Col>
          <Col md={8}>
            <animated.div style={fadeIn}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Is there an AI that takes notes for you?</Accordion.Header>
                  <Accordion.Body>
                    Yes, EduScribe AI is designed to take notes for you using advanced speech recognition and natural language processing technologies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What does an AI note taker do?</Accordion.Header>
                  <Accordion.Body>
                    An AI note taker, like EduScribe AI, transcribes spoken words into text, summarizes key points, and can even generate action items based on the content of the lecture or meeting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How accurate is the speech recognition?</Accordion.Header>
                  <Accordion.Body>
                    Our speech recognition technology is highly accurate and continuously improving. However, factors like audio quality and speaker clarity can affect accuracy.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Can I edit the AI-generated notes?</Accordion.Header>
                  <Accordion.Body>
                    Yes, you can always review and edit the AI-generated notes to ensure they meet your specific needs and preferences.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Is my data secure with EduScribe AI?</Accordion.Header>
                  <Accordion.Body>
                    We take data security very seriously. All your notes and personal information are encrypted and stored securely. We never share your data with third parties without your explicit consent.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </animated.div>
          </Col>
        </Row>

        <Row className="contact-section my-5" ref={ref}>
          <Col md={4}>
            <animated.div style={fadeIn} className="text-center">
              <FaEnvelope size={50} color="#28a745" className="mb-3" />
              <h2>Contact Us</h2>
            </animated.div>
          </Col>
          <Col md={8}>
            <animated.div style={fadeIn}>
              <Form onSubmit={handleContactSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter your message"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const NoteTaker: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [isListening, setIsListening] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });

  const buttonAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.1)' });
        await next({ transform: 'scale(1)' });
      }
    },
    config: { duration: 1000 },
  });

  useEffect(() => {
    let recognition: any;

    if ('webkitSpeechRecognition' in window) {
      recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        setCurrentNote(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      (window as any).webkitSpeechRecognition.start();
    } else {
      (window as any).webkitSpeechRecognition.stop();
    }
  };

  const addNote = async () => {
    if (currentNote.trim()) {
      setNotes(prevNotes => [...prevNotes, currentNote.trim()]);
      try {
        // Simulating AI explanation generation
        setExplanation("Generating AI insights...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setExplanation("AI-generated insights for your note.");
      } catch (error) {
        console.error('Error generating explanation:', error);
        setExplanation('Failed to generate explanation.');
      }
      setCurrentNote('');
    }
  };

  const generateSummary = async () => {
    setExplanation("Generating summary...");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setExplanation("AI-generated summary of the lecture notes...");
  };

  const generateActionItems = async () => {
    setExplanation("Generating action items...");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setExplanation("AI-generated action items for students...");
  };

  return (
    <Container className="mt-5">
      <animated.div style={fadeIn}>
        <h1 className="text-center mb-4">EduScribe AI Note Taker</h1>
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <animated.button
              style={buttonAnimation}
              className={`btn btn-lg w-100 ${isListening ? 'btn-danger' : 'btn-primary'}`}
              onClick={toggleListening}
            >
              {isListening ? <FaStop className="me-2" /> : <FaPlay className="me-2" />}
              {isListening ? 'Stop Listening' : 'Start Listening'}
            </animated.button>
          </Col>
          <Col md={6}>
            <img src={noteTakingImage} alt="Note Taking" className="img-fluid" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Current Lecture Note</Card.Title>
                <Form.Control 
                  as="textarea" 
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  rows={4}
                  placeholder="Your real-time lecture transcription will appear here..."
                  className="mb-3"
                />
                <Button variant="success" onClick={addNote} className="w-100">
                  <FaSave className="me-2" /> Save Note
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Lecture Notes</Card.Title>
                <ListGroup variant="flush">
                  {notes.map((note, index) => (
                    <ListGroup.Item key={index}>{note}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>AI Insights</Card.Title>
                <Card.Text>{explanation}</Card.Text>
                <Button variant="outline-primary" onClick={generateSummary} className="me-2 mb-2">
                  <FaRobot className="me-2" /> Generate Lecture Summary
                </Button>
                <Button variant="outline-secondary" onClick={generateActionItems} className="mb-2">
                  <FaListUl className="me-2" /> Generate Student Tasks
                </Button>
                </Card.Body>
          </Card>
        </Col>
      </Row>
    </animated.div>
  </Container>
);
}

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  });

  const features = [
    { icon: FaMicrophone, title: "Real-time Transcription", description: "Capture every word with our advanced speech-to-text technology." },
    { icon: FaFileAlt, title: "AI-powered Summaries", description: "Get concise summaries of your lectures with just one click." },
    { icon: FaListUl, title: "Smart Action Items", description: "Automatically generate to-do lists for students based on lecture content." },
    { icon: FaPencilAlt, title: "Easy Editing", description: "Edit and refine your notes with our intuitive interface." },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Features</h1>
      <Row ref={ref}>
        {features.map((feature, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <animated.div style={fadeIn}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <feature.icon size={50} className="mb-3 text-primary" />
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/note-taker" element={<NoteTaker />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;