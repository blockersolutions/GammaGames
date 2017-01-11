<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Donation.aspx.cs" Inherits="Donation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" Runat="Server">
    <h2>Thank You <%: Context.User.Identity.GetUserName()  %> <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label> for your <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label> donation to GammaGames!</h2>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" InsertCommand="INSERT INTO [Donations] ([UserName], [Amount]) VALUES (@UserName, @Amount)" OldValuesParameterFormatString="original_{0}">



        <InsertParameters>


        </InsertParameters>



    </asp:SqlDataSource>

</asp:Content>

