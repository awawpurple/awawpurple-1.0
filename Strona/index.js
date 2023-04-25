let MainValue = 1;
window.onload = load;
function load()
{
    $(document).ready(function()
    {
        $("#sliderMain").stop().slideDown("fast");
    });
}
function MainPage()
{
    $(document).ready(function()
    {
        $(".slider").stop().slideUp("fast");
        $("#sliderMain").stop().slideDown("fast");
        document.getElementById("myself").style.color = " rgb(254,254,254)";
        document.getElementById("pro").style.color = " rgb(254,254,254)";
        document.getElementById("social").style.color = " rgb(254,254,254)";
        document.getElementById("name").style.color = " rgb(71,68,158)";
        let rotate = document.getElementById("logopct2");
        rotate.style.transform = 'rotate(0deg)';
        let rotate2 = document.getElementById("logopct3");
        rotate2.style.transform = 'rotate(0deg)';
    });
}
function Projects()
{
    $(document).ready(function()
    {
        $(".slider").stop().slideUp("fast");
        $("#sliderProjects").stop().slideDown("fast");
        document.getElementById("myself").style.color = " rgb(254,254,254)";
        document.getElementById("pro").style.color = " rgb(71,68,158)";
        document.getElementById("social").style.color = " rgb(254,254,254)";
        document.getElementById("name").style.color = " rgb(254,254,254)";
        let rotate = document.getElementById("logopct2");
        rotate.style.transform = 'rotate(90deg)';
        let rotate2 = document.getElementById("logopct3");
        rotate2.style.transform = 'rotate(90deg)';
    });
}
function Myself()
{
    $(document).ready(function()
    {
        $(".slider").stop().slideUp("fast");
        $("#sliderMyself").stop().slideDown("fast");
        document.getElementById("myself").style.color = " rgb(71,68,158)";
        document.getElementById("pro").style.color = " rgb(254,254,254)";
        document.getElementById("social").style.color = " rgb(254,254,254)";
        document.getElementById("name").style.color = " rgb(254,254,254)";
        let rotate = document.getElementById("logopct2");
        rotate.style.transform = 'rotate(45deg)';
        let rotate2 = document.getElementById("logopct3");
        rotate2.style.transform = 'rotate(45deg)';
    });
}
function Contact()
{
    $(document).ready(function()
    {
        $(".slider").stop().slideUp("fast");
        $("#sliderContact").stop().slideDown("fast");
        document.getElementById("myself").style.color = " rgb(254,254,254)";
        document.getElementById("pro").style.color = " rgb(254,254,254)";
        document.getElementById("social").style.color = " rgb(71,68,158)";
        document.getElementById("name").style.color = " rgb(254,254,254)";
        let rotate = document.getElementById("logopct2");
        rotate.style.transform = 'rotate(135deg)';
        let rotate2 = document.getElementById("logopct3");
        rotate2.style.transform = 'rotate(135deg)';
    });
}
function HideProject()
{
    if(document.getElementById("ProjectDesc").style.display == 'block')
    {
        document.getElementById("ProjectDesc").style.display = 'none';
    }
}
function Project1()
{
    //tu kiedyś będzie tabela
    document.getElementById("ProjectDesc").style.display = 'block';
    document.getElementById("ProjectDesc").innerHTML = "<table class='Project'>\
    <tr>\
    <td><h1>Intimidated</h1></td>\
    </tr>\
    <tr>\
    <td><b>Status: In development\
    <br>Start date: September 2022</b>\
    <br> Singleplayer horror game made with Unreal Engine 5. \
    Intimidated is being made by small group of friends named\
    <br><b>Too Salty Studio.</b> \
    <br>In the game The main character gets information about a valuable item located in an abandoned house. \
    Not being able to miss such an opportunity he goes to the place, but not everything goes according to plan. \
    <br><br>(To close this window simply press anywhere on the navigation panel)\
    </td>\
    </tr>\
    </table>\
    ";
}
function Project2()
{
    document.getElementById("ProjectDesc").style.display = 'block';
    document.getElementById("ProjectDesc").innerHTML = "<table class='Project'>\
    <tr>\
    <td><h1>Website</h1></td>\
    </tr>\
    <tr>\
    <td><b>Status: In development\
    <br>Start date: March 2023</b>\
    <br> The website you are on right now was created mainly as a summary of my past and future work. \
    It is constantly being developed and more features are being added. \
    If I would start any new project it will be visible here.\
    <br><br>(To close this window simply press anywhere on the navigation panel)\
    </td>\
    </tr>\
    </table>\
    ";
}
function Project3()
{
    document.getElementById("ProjectDesc").style.display = 'block';
    document.getElementById("ProjectDesc").innerHTML = "<table class='Project'>\
    <tr>\
    <td><h1>Video Editing</h1></td>\
    </tr>\
    <tr>\
    <td><b>Status: Learning\
    <br>Start date: January 2023</b>\
    <br> At the beginning of the year, I started learning how to use DaVinci Resolve so that projects could also be documented in video form.\
    To this end, a YouTube channel is being created where you will be able to see the progress of individual projects in the form of short videos.\
    <br><br>(To close this window simply press anywhere on the navigation panel)\
    </td>\
    </tr>\
    </table>\
    ";
}
function Project4()
{
    document.getElementById("ProjectDesc").style.display = 'block';
    document.getElementById("ProjectDesc").innerHTML = "<table class='Project'>\
    <tr>\
    <td><h1>Zombies</h1></td>\
    </tr>\
    <tr>\
    <td><b>Status: Final Touches\
    <br>Start date: December 2022</b>\
    <br> Singleplayer First Person Shooter made with Unreal Engine 5. \
    A game in which the emphasis is on the pleasure of gameplay. \
    A short game in which the goal is to complete several missions on a map overrun by zombies. \
    This game is a test of my programming skills because it is made alone. \
    <br><br>(To close this window simply press anywhere on the navigation panel)\
    </td>\
    </tr>\
    </table>\
    ";
}
function SetMainContent(i)
{
    switch(i)
    {
        case 1:
        {
            document.getElementById("maincontent").style.height = '60vh';
            document.body.style.overflowY = 'hidden';
            document.getElementById("header").innerHTML = "Welcome";
            document.getElementById("section").innerHTML = "This website is a summary of all the work I've done so far and what am I currently doing.\
            I wanted to create a sort of user-friendly database where all my projects can be seen.\
             If you encounter any problems with the website, be sure to contact me.<br> Thank You for visiting.\
            \
            ";
        break;    
        }
        case 2:
        {
            document.getElementById("maincontent").style.height = '70vh';
            document.body.style.overflowY = 'hidden';
            document.getElementById("header").innerHTML = "About me";
            document.getElementById("section").innerHTML = "My name is Aleksander I'm 17. I live in Szczecin.\
            Currently a third-year technical school student. \
            <br><b>My hobbies are: \
            <br>Motorsport (Mainly F1)\
            <br>Video Editing\
            <br>Game development (Programming and Storytelling)</b>\
            <br>The idea for this site was born in March 2023, at which time a prototype was created.\
            Before that, I had experience with making websites but this is the first project of this kind that I am making available to a general audience.\
            <br>I hope you enjoy.\
            ";
        break;
        }
        case 3:
        {
            document.getElementById("maincontent").style.height = 'auto';
            document.body.style.overflowY = 'scroll';
            document.getElementById("header").innerHTML = "Projects";
            document.getElementById("section").innerHTML = '\
            <table class="ProjectTable">\
            <tr>\
            <td class="pr" id="P1" onclick="Project1();"> <footer class="ProFoot">Intimidated<br>(Too Salty Studio)</footer></td>\
            <td class="pr" id="P2" onclick="Project2();"> <footer class="ProFoot">Personal Website</footer></td>\
            </tr>\
            <tr>\
            <td class="pr" id="P3" onclick="Project3();"> <footer class="ProFoot">Video Editing<br>(Youtube)</footer></td>\
            <td class="pr" id="P4" onclick="Project4();"> <footer class="ProFoot">Zombies</footer></td>\
            </tr>';
        break;    
        }
        case 4:
        {
            document.getElementById("maincontent").style.height = '60vh';
            document.body.style.overflowY = 'hidden';
            document.getElementById("header").innerHTML = "Contact";
            document.getElementById("section").innerHTML = '\
            <table class="ContactTable">\
            <tr>\
            <td><img id="YT" src="Email.png"></td>\
            </tr>\  <tr>\
            <td>E-Mail</td>\
            </tr>\ <tr>\
            <td>contact@awawpurple.pl</td>\
            </table>';
        break;
        }
    }
    MainValue = i;
}