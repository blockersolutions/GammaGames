<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Scores.aspx.cs" Inherits="Scores" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <h2></h2>
    <br />
    <div class="container-fluid">
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConflictDetection="CompareAllValues" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" DeleteCommand="DELETE FROM [Scores] WHERE [ID] = @original_ID AND [UserName] = @original_UserName AND (([Game] = @original_Game) OR ([Game] IS NULL AND @original_Game IS NULL)) AND (([Score] = @original_Score) OR ([Score] IS NULL AND @original_Score IS NULL))" InsertCommand="INSERT INTO [Scores] ([UserName], [Game], [Score]) VALUES (@UserName, @Game, @Score)" OldValuesParameterFormatString="original_{0}" SelectCommand="SELECT * FROM [Scores]" UpdateCommand="UPDATE [Scores] SET [UserName] = @UserName, [Game] = @Game, [Score] = @Score WHERE [ID] = @original_ID AND [UserName] = @original_UserName AND (([Game] = @original_Game) OR ([Game] IS NULL AND @original_Game IS NULL)) AND (([Score] = @original_Score) OR ([Score] IS NULL AND @original_Score IS NULL))">
            <DeleteParameters>
                <asp:Parameter Name="original_ID" Type="Int32" />
                <asp:Parameter Name="original_UserName" Type="String" />
                <asp:Parameter Name="original_Game" Type="String" />
                <asp:Parameter Name="original_Score" Type="String" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="UserName" Type="String" />
                <asp:Parameter Name="Game" Type="String" />
                <asp:Parameter Name="Score" Type="String" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="UserName" Type="String" />
                <asp:Parameter Name="Game" Type="String" />
                <asp:Parameter Name="Score" Type="String" />
                <asp:Parameter Name="original_ID" Type="Int32" />
                <asp:Parameter Name="original_UserName" Type="String" />
                <asp:Parameter Name="original_Game" Type="String" />
                <asp:Parameter Name="original_Score" Type="String" />
            </UpdateParameters>
        </asp:SqlDataSource>
        <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" DataSourceID="SqlDataSource1">
            <ItemTemplate>
                ID:
            <asp:Label ID="IDLabel" runat="server" Text='<%# Eval("ID") %>' />
                <br />
                UserName:
            <asp:Label ID="UserNameLabel" runat="server" Text='<%# Eval("UserName") %>' />
                <br />
                Game:
            <asp:Label ID="GameLabel" runat="server" Text='<%# Eval("Game") %>' />
                <br />
                Score:
            <asp:Label ID="ScoreLabel" runat="server" Text='<%# Eval("Score") %>' />
                <br />
                <br />
            </ItemTemplate>
        </asp:DataList>
    </div>


</asp:Content>

