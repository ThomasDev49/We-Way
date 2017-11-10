// ========Verification du formulaire=======

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";

    // champ.style.backgroundColor = (erreur) ? "#fba" : "";
}

function verifNomDeCompte (champ){
  if (champ.value.length < 2 || champ.value.length > 15)
  {
    surligne (champ, true);
    alert ("Le Nom de compte doit comporter entre 2 & 15 caractères" );

    return false;
  }
  else {
    surligne (champ, false);
    return true;
  }
}
