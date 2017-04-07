'use strict';

angular.
    module('speech').
    component('speech', {
        templateUrl: 'speech/speech.template.html',
        controller: ['$http', function SpeechController($http) {

            var self = this;

            self.sentence = '';
            self.sentence_array = [];

            self.speak = function() {
                if (self.sentence) {
                    var msg = new SpeechSynthesisUtterance(self.sentence);
                    msg.rate = 0.8;
                    window.speechSynthesis.speak(msg);
                }
            };

            self.updateSentence = function () {
                self.sentence = self.sentence_array.join(' ');
            };

            self.clear = function() {
                self.sentence_array = [];
                self.updateSentence();
            }

            self.undo = function() {
                self.sentence_array.pop();
                self.updateSentence();
            }

            self.addWord = function(word) {
                self.sentence_array.push(word);
                self.updateSentence();
            };

            self.favourite = function() {
                if (self.sentence) {
                    self.words.push({
                        "word": self.sentence
                    });
                }
            };

            $http.get('words/words.json').then(function(response) {
                self.words = response.data;
            });

        }]
    }
);