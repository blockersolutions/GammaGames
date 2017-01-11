using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Security.Claims;
using System.Security.Principal;
using System.Web.Security;
using Microsoft.AspNet.Identity;

public partial class Donation : System.Web.UI.Page
{
    public string authToken;
    public string query;
    public string strResponse;
    public string amount;


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {

            //read in txn token from querystring
            amount = Request.QueryString["amt"];

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            SqlDataSource2.InsertParameters.Add("UserName", "Name");
            SqlDataSource2.InsertParameters.Add("Amount", amount);


            SqlDataSource2.Insert();
        }
        else
        {
            Label1.Text = "Oooops, something went wrong...";

        }
    }
}

