<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="MathWormsMain.aspx.cs" Inherits="Students_MathWormsMain" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <h2><%: Title %>.</h2>
    <div class="container-fluid text-center">
        <h3 class="margin">Choose Your Difficulty</h3>
        <div class="container-fluid text-center">
            <a href="Worm.aspx"><h3 class="margin">Addition</h3></a>            
        </div>
        <div class="container-fluid text-center">
            <a href="Worms2.aspx"><h3 class="margin">Subtraction</h3></a>
        </div>
        <div class="container-fluid text-center">
            <a href="Worms3.aspx"><h3 class="margin">Multiplication</h3></a>
        </div>
        <div class="container-fluid text-center">
            <h3 class="margin">Division</h3>

        </div>
</asp:Content>

