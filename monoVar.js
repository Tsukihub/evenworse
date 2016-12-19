nom = prompt('Indiquez votre âge :');
s = prompt('Indiquez "fille" ou "garçon" en fonction de votre sexe, si vous ne savez pas c\'est écrit sur votre carte d\'identité');
n = prompt('Quelle est votre nationalité?');
if (nom >= 18 ) {
alert('vous un(e) '+s+' majeur(e) '+n+'');
}
else {
alert('vous un(e) '+s+'mineur(e)' +n+'');
}

