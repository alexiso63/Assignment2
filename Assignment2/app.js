var MyModule = angular.module('QuizProgram', []);

MyModule.controller('QuizProgramController', [ '$scope', 'StudentName', 'QuestionsAsked', 'studentshown', 'questionshown',
    function($scope, StudentName, QuestionsAsked, studentshown, questionshown){
        
        var qpc = this; 
            
        qpc.showstudent = StudentName.getStudent();
        qpc.showquestion = QuestionsAsked.getQuestion();
    
        MyModule.factory("StudentName", function(){
        var students = [
            "Alexis Oliva",
            "Jamal Al-sarraf",
            "John Doe",
            "Tommy Twoshoes",
            "Buddy Guy",
            "Naruto Uzumaki"];
            
            var studentshown = "";
            
             return{
        	    studentshown: "", 
        		getStudent: function(){
        			return students[Math.floor(Math.random() * 5)];
        		},
        		setStudent: function(studentString){
        		    studentshown = studentString;    
        		}
            };
        });
    
        MyModule.factory("QuestionsAsked", function(){
            var questions = [
                "what is 2 plus 2",
                "what color is blue",
                "what is the meaning of life",
                "how big is the universe",
                "how do you spell monkey",
                "how do you change a tire"];
                
                var questionshown = "";
                
            return{
                questionshown: "",
        		getQuestion: function(){
        		    return questions[Math.floor(Math.random() * 5)];
        		},
        		setQuestion: function(questionString){
        		    questionshown = questionString;
        		}
            };
    });
}]);