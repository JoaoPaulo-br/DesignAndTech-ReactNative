import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux';

class QuizPageScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            rightAnswer: '',
            answerPos: 0,
            selPos: 0,
            index: 0,
            score: 0
        }
    }

    componentDidMount(){
        this.generateQuiz();
    }

    confirmQuiz = () => {
        if (this.state.index < 5) {
            if (this.state.selPos == this.state.answerPos) {
                this.setState({ 
                    score: this.state.score + 1
                })
                Alert.alert(
                    'Well Done',
                    'CORRECT',
                    [
                      {text: 'OK', onPress: () => this.generateQuiz()},
                    ],
                    {cancelable: false},
                  );
            } else {
                Alert.alert(
                    'Unlucky',
                    'INCORRECT, correct answer: ' + this.state.rightAnswer,
                    [
                      {text: 'OK', onPress: () => this.generateQuiz()},
                    ],
                    {cancelable: false},
                  );
            }
        } else {
            if (this.state.selPos == this.state.answerPos) {
                this.setState({ 
                    score: this.state.score + 1
                })
                Alert.alert(
                    'Well Done',
                    'CORRECT',
                    [
                      {text: 'OK', onPress: () => this.props.navigation.replace("Result", {score: this.state.score})},
                    ],
                    {cancelable: false},
                  );
            } else {
                Alert.alert(
                    'Unlucky',
                    'INCORRECT, correct answer: ' + this.state.rightAnswer,
                    [
                      {text: 'OK', onPress: () => this.props.navigation.replace("Result", {score: this.state.score})},
                    ],
                    {cancelable: false},
                  );
            }
        }
    }

    selectAnswer = (index) => {
        this.setState({
            selPos: index
        })
    }

    generateQuiz = () => {
        var quizIndex =  Math.floor(Math.random() * 49);
        var posIndex = Math.floor(Math.random() * 8);

        this.setState({ 
            selPos: 0,
            index: this.state.index + 1,
            rightAnswer: this.quizs[quizIndex].answer1,
        })
        if (posIndex == 0) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer1,
                answer2: this.quizs[quizIndex].answer3,
                answer3: this.quizs[quizIndex].answer2,
                answer4: this.quizs[quizIndex].answer4,
                answerPos: 1
            })
        } else if (posIndex == 1) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer4,
                answer2: this.quizs[quizIndex].answer2,
                answer3: this.quizs[quizIndex].answer3,
                answer4: this.quizs[quizIndex].answer1,
                answerPos: 4
            })
        } else if (posIndex == 2) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer3,
                answer2: this.quizs[quizIndex].answer2,
                answer3: this.quizs[quizIndex].answer1,
                answer4: this.quizs[quizIndex].answer4,
                answerPos: 3
            })
        } else if (posIndex == 3) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer2,
                answer2: this.quizs[quizIndex].answer1,
                answer3: this.quizs[quizIndex].answer3,
                answer4: this.quizs[quizIndex].answer4,
                answerPos: 2
            })            
        } else if (posIndex == 4) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer2,
                answer2: this.quizs[quizIndex].answer4,
                answer3: this.quizs[quizIndex].answer3,
                answer4: this.quizs[quizIndex].answer1,
                answerPos: 4
            })
        } else if (posIndex == 5) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer1,
                answer2: this.quizs[quizIndex].answer2,
                answer3: this.quizs[quizIndex].answer3,
                answer4: this.quizs[quizIndex].answer4,
                answerPos: 1
            })
        } else if (posIndex == 6) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer3,
                answer2: this.quizs[quizIndex].answer4,
                answer3: this.quizs[quizIndex].answer2,
                answer4: this.quizs[quizIndex].answer1,
                answerPos: 4
            })
        } else if (posIndex == 7) {
            this.setState({
                question: this.quizs[quizIndex].question,
                answer1: this.quizs[quizIndex].answer4,
                answer2: this.quizs[quizIndex].answer3,
                answer3: this.quizs[quizIndex].answer2,
                answer4: this.quizs[quizIndex].answer1,
                answerPos: 4
            })            
        }
    }

    quizs = [
        {
            question: 'Why do Occupational Health and Safety practices need to be followed in a workplace?',
            answer1: 'To provide employees with a safe workplace',
            answer2: 'To ensure that employees are healthy in their workplace',
            answer3: 'To ensure that someone is trained as first aid officer',
            answer4: 'To give employees an opportunity to complain to management',
        },
        {
            question: 'Which of the following best describes the ergonomic feature of a product?',
            answer1: 'It is easy to work with and use',
            answer2: 'It has good shape and fit',
            answer3: 'It has a good colour scheme',
            answer4: 'No effort to use',
        },
        {
            question: 'Which of the following best describes a sustainable feature of a product?',
            answer1: 'It uses sustainable materials and process',
            answer2: 'Made from wood and metal',
            answer3: 'Project made from steel',
            answer4: 'It has good shape and fit',
        },
        {
            question: 'Which of the following best describes an aesthetic feature of a product?',
            answer1: 'Pleasing colour scheme and grabs attention',
            answer2: 'Easy to work with and use',
            answer3: 'Smooth edges',
            answer4: 'Made from wood and steel',
        },
        {
            question: 'As a product approaches the end of its life cycle, what factor contributes most to its decline in acceptance?',
            answer1: 'Shift in social trends',
            answer2: 'New materials',
            answer3: 'Poor Design',
            answer4: 'Changing in manufacturing techniques',
        },
        {
            question: 'A delay in completing a design project is most likely to be caused by?',
            answer1: 'Poor planning',
            answer2: 'Poor timing',
            answer3: 'Lack of finance',
            answer4: 'Lack of resources',
        },
        {
            question: 'What would a designer do after researching a problem?',
            answer1: 'Develop possible design solutions',
            answer2: 'Gather market research',
            answer3: 'Decide on manufacturing processes',
            answer4: 'Develop technincal illustration',
        },
        {
            question: 'What is the main purpose of developing sustainable products?',
            answer1: 'To make better use of natural products',
            answer2: 'To have longer lasting products',
            answer3: 'To reduce amount of materials used',
            answer4: 'Reduce landfill',
        },
        {
            question: 'How does an entrepreneur influence the success of an innovation?',
            answer1: 'Analysing market research, legal and ethical issues',
            answer2: 'Examining cultural and durability factors',
            answer3: 'Analysing industry standards and production issues',
            answer4: 'Determining production cost and time-management issues',
        },
        {
            question: 'Which of the following is most likely to result in a high quality product?',
            answer1: 'Developing good functional and/or aesthetic features',
            answer2: 'Implementing, environmentally friendly production processes',
            answer3: 'Using appropriate production processes',
            answer4: 'Assessing available Government rebates',
        },
        {
            question: 'Which of the following contributes most to sustainability during manufacturing?',
            answer1: 'Using materials and processes that have minimal effect on the environment',
            answer2: 'Recycling materials to minimise waste',
            answer3: 'Monitoring the amount of energy used',
            answer4: 'Analysing the economic aspects',
        },
        {
            question: 'The final prototype of a new product was evaluated and its features and functions were closely examined. What was being determined by this evaluation?',
            answer1: 'Whether it is a quality solution to design problem',
            answer2: 'Whether it will sell the greatest number of units at the best price.',
            answer3: 'Whether it is aesthetically pleasing',
            answer4: 'Whether it performs desired function.',
        },
        {
            question: 'Which one best describes the nature of entreperneurial activity?',
            answer1: 'It assumes the responsibility, vision and economic support for a new product',
            answer2: 'It provide financial backing and technical support for a new product',
            answer3: 'It provides inspiration and creativity in the development of a new product',
            answer4: 'It takes responsibility for the creative and social aspects of a new product',
        },
        {
            question: 'When would a working prototype be most useful to communicate design solutions?',
            answer1: 'When presenting the final design to desired audience',
            answer2: 'When developing concepts with designers',
            answer3: 'When analysing problems with production',
            answer4: 'When setting up for production',
        },
        {
            question: 'A design team works best when?',
            answer1: 'tasks are allocated to individuals based of their knowledge and strengths',
            answer2: 'The designer\'s workflow is structured and organised',
            answer3: 'Team members always work independently towards a common goal',
            answer4: 'Team members are working in competiton with each other',
        },
        {
            question: 'Why do designers and manufacturers use environmentally friendly resources?',
            answer1: 'To maintain resources for future use',
            answer2: 'To increase environmental awareness',
            answer3: 'To ensure the use of recycled materials',
            answer4: 'Improve the quality of the environment',
        },
        {
            question: 'Which of the following are taken into most consideration when designing products to meet society\'s needs?',
            answer1: 'Social Trends and Expectations',
            answer2: 'Individual needs and wants',
            answer3: 'Cultural expectations and beliefs',
            answer4: 'Environmental implications and expectations',
        },
        {
            question: 'What is a predominant feature of entrepreneurial activity?',
            answer1: 'Identifying opportunities and Risk-taking',
            answer2: 'Designing the manufacturing process',
            answer3: 'Conducting marketing campaign and life-cycle assessment',
            answer4: 'Designing initial concepts',
        },
        {
            question: 'Why do designers created scaled models of projects?',
            answer1: 'To communicate the project effectively',
            answer2: 'To ensure drawings of the design are correct',
            answer3: 'Show aesthetic aspects of the project',
            answer4: 'To demonstrate construction methods',
        },
        {
            question: 'In a design brief, what is the purpose of the design specfications provided by a client to a designer?',
            answer1: 'Outline aspects of the design in order to meet needs',
            answer2: 'Examine market trend and legal requirements',
            answer3: 'List important social and environmental considerations in the design',
            answer4: 'Summarise all features in a design',
        },
        {
            question: 'What effect does obsolescence have on products?',
            answer1: 'Encourages the use of newer technologies',
            answer2: 'Ensures the production of sustainable products',
            answer3: 'It sells of second-hand products and parts',
            answer4: 'It creates a flow of economy',
        },
        {
            question: 'When is a design solution considered to be most appropriate?',
            answer1: 'When it fulfils its intended end-use requirements',
            answer2: 'When it satisfies the aesthetic requirements',
            answer3: 'When it meets the needs of the target market',
            answer4: 'When it provides strength, durability and safety.',
        },
        {
            question: 'What makes a good design brief?',
            answer1: 'A clear concise explanation of needs and requirements of the client',
            answer2: 'It shows the aesthetics and function.',
            answer3: 'It mentions ideas and concepts',
            answer4: 'It has a detailed explanation of the problem',
        },
        {
            question: 'Designers obtain patents to protect their designs to have?',
            answer1: 'Exclusive rights to license, promote and sell their designs',
            answer2: 'Effective marketing controls',
            answer3: 'The safe production of their designs',
            answer4: 'The effective international marketing of their designs',
        },
        {
            question: 'What is the purpose of patents?',
            answer1: 'To protect designer\'s ideas and designs',
            answer2: 'To use certain equipment in a workshop',
            answer3: 'Permissions given before installing a program',
            answer4: 'To grant companies opportunity to sell someone\'s idea',
        },
        {
            question: 'What factor is most important when considering a sustainable material for a product?',
            answer1: 'The ability of the material to be renewed',
            answer2: 'The cost of the material',
            answer3: 'The durability of the material',
            answer4: 'The safety of the material',
        },
        {
            question: 'What opportunities do emerging technologies provide designers?',
            answer1: 'Develop products that are innovative',
            answer2: 'Develop products that guarantee sales',
            answer3: 'Design products using existing technologies',
            answer4: 'Design products that have limited range of applications',
        },
        {
            question: 'What are three types of projects that can be worked on MDP?',
            answer1: 'Product, system and environment',
            answer2: 'Product, project and system',
            answer3: 'Environment, system and application',
            answer4: 'Application, product and system',
        },
        {
            question: 'What does effective product development rely on?',
            answer1: 'Gathering ongoing evaluation and responding to feedback',
            answer2: 'Ability to manage finances',
            answer3: 'Ability to sketch original ideas',
            answer4: 'Choosing the correct manufacturing process',
        },
        {
            question: 'Why do designers conduct market research before product development?',
            answer1: 'To understand the target audience\'s needs and wants',
            answer2: 'To determine suitable advertisements',
            answer3: 'To make finance and action plans',
            answer4: 'To determine the values and beliefs of various groups',
        },
        {
            question: 'What factors influence the success of an innovation the most?',
            answer1: 'Timing and appropriate marketing strategies.',
            answer2: 'Ease of use and cost management.',
            answer3: 'Product demand and social implications.',
            answer4: 'Social demand and cultural values.',
        },
        {
            question: 'What characterisitc of an entreprenuer is most important?',
            answer1: 'Being a risk-taker.',
            answer2: 'Being resilient.',
            answer3: 'Being environmentally friendly.',
            answer4: 'Being legally responsible.',
        },
        {
            question: 'The most important part to the success of a product is?',
            answer1: 'Meeting the needs of the user.',
            answer2: 'Life-time warranty.',
            answer3: 'Built-in obsolescence.',
            answer4: 'Meeting minority audience’s expectations.',
        },
        {
            question: 'Why do designers conduct life-cycle analysis?',
            answer1: 'To analyse the impact of the product on society and environment.',
            answer2: 'To determine the overall cost of the product.',
            answer3: 'To analyse how products will be manufactured',
            answer4: 'To analyse how materials will be disposed or recycled.',
        },
        {
            question: 'What does a clients brief outline to a designer?',
            answer1: 'Summary of all restricitons that need to be considered',
            answer2: 'Ideal aesthetic and function.',
            answer3: 'Sketches of end-product',
            answer4: 'List of important social and environmental considerations.',
        },
        {
            question: 'What does WHS stand for?',
            answer1: 'Work health and safety',
            answer2: 'Work help and safety',
            answer3: 'Work health and survey',
            answer4: 'Work healthy and safely',
        },
        {
            question: 'Which of the following is the most important work health and safety consideration during manufacturing stage?',
            answer1: 'Identification, assessment and control of risks and hazards',
            answer2: 'Maintenance of machinery and tools',
            answer3: 'Safety feature of the product',
            answer4: 'A survey of past injuries',
        },
        {
            question: 'Why do designers protect their intellectual property?',
            answer1: 'So the designer\'s idea cannont be marketed and sold by other designers',
            answer2: 'Allows designers to market their ideas locally and internationally',
            answer3: 'It allows designers to share ideas',
            answer4: 'It ensures all future designs are patented',
        },
        {
            question: 'What is intellectual property?',
            answer1: 'Property resulting from the application of someone\'s mind to create something new',
            answer2: 'Property of an intellect',
            answer3: 'Patented designs',
            answer4: 'Emerging technologies',
        },
        {
            question: 'Which of the following contains only types of intellectual property?',
            answer1: 'Patent, trademark, registered design and plant breeder\'s rights',
            answer2: 'Copyright, Patent and Logo Mark',
            answer3: 'Copyright, Patent, Trademark and Animal breeder\'s rights',
            answer4: 'Animals and plants breeder\'s rights',
        },
        {
            question: 'What does a patent protect?',
            answer1: 'New inventions new processes',
            answer2: 'Drawings, art, literature, music and film',
            answer3: 'Logos',
            answer4: 'Product Design',
        },
        {
            question: 'What does Trademark protect?',
            answer1: 'Logos, words, letters and numbers',
            answer2: 'Product designs',
            answer3: 'New inventions and new process',
            answer4: 'Drawings and art',
        },
        {
            question: 'What does registered design protect?',
            answer1: 'Product designs',
            answer2: 'New inventions and processes',
            answer3: 'New plant varieties',
            answer4: 'Art and Music',
        },
        {
            question: 'What does plant breeder\'s rights protect?',
            answer1: 'New plant varieties',
            answer2: 'New inventions and processes',
            answer3: 'Product Designs',
            answer4: 'Art and Music',
        },
        {
            question: 'What does copyright protect?',
            answer1: 'Drawings, art, literature, music and film',
            answer2: 'New inventions and processes',
            answer3: 'Product Designs',
            answer4: 'New plant varieties',
        },
        {
            question: 'Which of following is an example protected by a patent?',
            answer1: 'Anti-cervical cancer drug',
            answer2: 'Game of Thrones',
            answer3: 'QANTAS',
            answer4: 'Runners',
        },
        {
            question: 'Which of following is an example protected by a copyright?',
            answer1: 'Game of Thrones',
            answer2: 'Anti-cervical cancer drug',
            answer3: 'QANTAS',
            answer4: 'Runners',
        },
        {
            question: 'Which of following is an example protected by a registered design?',
            answer1: 'Runners',
            answer2: 'Anti-cervical cancer drug',
            answer3: 'QANTAS',
            answer4: 'Game of Thrones',
        },
        {
            question: 'Which of following is an example protected by a trademark?',
            answer1: 'QANTAS',
            answer2: 'Anti-cervical cancer drug',
            answer3: 'Runners',
            answer4: 'Game of Thrones',
        },
    ]

    render() {
        let {selPos} = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.headerTitle, color: this.props.colorValue}}>QUIZ</Text>
                        <Text style={{...styles.scoreTitle, color: this.props.colorValue}}>{this.state.score}/5</Text>
                    </View>
                    <Text style={{...styles.headerSubTitle, color: this.props.colorValue}}>Q{this.state.index}) {this.state.question}</Text>
                </View>
                <View style={styles.questions}>
                    <TouchableOpacity style={{flex: 1.5}} onPress={() => this.selectAnswer(1)}>
                        <Text style={selPos == 1 ? {...styles.questionText, color: this.props.colorValue, ...styles.selected, borderColor: this.props.colorValue} : {...styles.questionText, color: this.props.colorValue}}>A) {this.state.answer1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1.5}} onPress={() => this.selectAnswer(2)}>
                        <Text style={selPos == 2 ? {...styles.questionText, color: this.props.colorValue, ...styles.selected, borderColor: this.props.colorValue} : {...styles.questionText, color: this.props.colorValue}}>B) {this.state.answer2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1.5}} onPress={() => this.selectAnswer(3)}>
                        <Text style={selPos == 3 ? {...styles.questionText, color: this.props.colorValue, ...styles.selected, borderColor: this.props.colorValue} : {...styles.questionText, color: this.props.colorValue}}>C) {this.state.answer3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1.5}} onPress={() => this.selectAnswer(4)}>
                        <Text style={selPos == 4 ? {...styles.questionText, color: this.props.colorValue, ...styles.selected, borderColor: this.props.colorValue} : {...styles.questionText, color: this.props.colorValue}}>D) {this.state.answer4}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.confirmQuiz}>
                        <Text style={selPos == 0 ? styles.invisible : {...styles.confirmText, color: this.props.colorValue}}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contectText: {
        fontSize: 18,
        color: 'black',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    scoreTitle: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 30,
        marginTop: 20,
    },
    headerSubTitle: {
        textAlign: 'left',
        fontSize: 18,
        color: '#2F4F4F',
        marginLeft: 20,
    },
    questions: {
        flex: 1,
        margin: 20,
    },
    questionText: {
        fontSize: 20,
        textAlignVertical: 'center',
        height: '100%',
        padding: 5,
    },
    selected: {
        borderWidth: 2,
        marginRight: 20,
    },
    confirmText: {
        textAlign: 'center',
        fontSize: 20,
        textAlignVertical: 'center',
        height: '100%'
    },
    invisible: {
        display: 'none',
    },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(QuizPageScreen)
//export default QuizPageScreen;