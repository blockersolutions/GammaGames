<%@ Page Title="Students" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Students.aspx.cs" Inherits="Students_Students" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="Server">
    <h2><%: Title %>.</h2>

    <!-- First Container -->
    <div class="container-fluid text-center">
        <h3 class="margin">Check the Top Scores!</h3>
        <a href="Scores.php"><img src="/Content/GammaGames/highscores.png" class="img-responsive img-circle margin" style="display: inline" alt="HighScores" width="350" height="350"></a>
    </div>
    <hr />
    <!-- Second Container -->
    <div class="container-fluid text-center">
        <h3 class="margin">Play MathWorms!</h3>
        <a href="MathWormsMain.aspx"><img src="/Content/GammaGames/MathWorms.png" class="img-responsive img-circle margin" style="display: inline" alt="HighScores" width="350" height="350"></a>
    </div>
    <hr />
    <!-- Third Container (Grid) -->
    <div class="container-fluid text-center">
        <h3 class="margin">Play SpeedMath!</h3>
        <img src="/Content/GammaGames/SpeedMath.png" class="img-responsive img-circle margin" style="display: inline" alt="HighScores" width="350" height="350">
    </div>




</asp:Content>

