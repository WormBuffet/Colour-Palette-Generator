<!DOCTYPE html>
<html>
    <head>
        <title>Colour Palette Generator</title>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="genScript.js"></script>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <link rel="stylesheet" type="text/css" href="mainPage.css">
    </head>

    <body>
        <nav>
            <div class="container">
                <label class="logo">Logo</label>
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">View Palette</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="container">
            <div class="container_main">
                <div class="colour_containers">

                    <div class="colour_container colour_container-shift" id="1">
                        <div class="colour"></div>
                            <div class="colour_tools">
                                <h3 class="hex">
                                    FFFFFFF
                                </h3>

                                <div class="btn_container">
                                    <a class="btn lock"></a>
                                    <a class="btn arrow"></a>
                                </div>
                            </div>
                    </div>

                    <div class="colour_container colour_container-shift" id="2">
                        <div class="colour"></div>
                            <div class="colour_tools">
                                <h3 class="hex">
                                    FFFFFFF
                                </h3>

                                <div class="btn_container">
                                    <a class="btn lock"></a>
                                    <a class="btn arrow"></a>
                                </div>
                            </div>
                    </div>

                    <div class="colour_container colour_container-shift" id="3">
                        <div class="colour"></div>
                            <div class="colour_tools">
                                <h3 class="hex">
                                    FFFFFFF
                                </h3>

                                <div class="btn_container">
                                    <a class="btn lock"></a>
                                    <a class="btn arrow"></a>
                                </div>
                            </div>
                    </div>

                    <div class="colour_container colour_container-shift" id="4">
                        <div class="colour"></div>
                            <div class="colour_tools">
                                <h3 class="hex">
                                    FFFFFFF
                                </h3>

                                <div class="btn_container">
                                    <a class="btn lock"></a>
                                    <a class="btn arrow"></a>
                                </div>
                            </div>
                    </div>

                    <div class="colour_container" id="5">
                        <div class="colour"></div>
                            <div class="colour_tools">
                                <h3 class="hex">
                                    FFFFFFF
                                </h3>

                                <div class="btn_container">
                                    <a class="btn lock"></a>
                                    <a class="btn arrow"></a>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <button>generate</button>
                </div>
            </div>
            
            <div class="container_main">
                
                <!--Table Containing all Colour Information-->
                <table class="slice_table">
                    <!--Complementary Colours-->
                    <tr>
                        <td class="info_text" id="complementary_text">Complementary</td>
                    </tr>
                    <tr>
                        <td class="colour_main"></td>
                    </tr>
                    <tr>
                        <td id="complementary_colour"></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    
                    <!--Triadic Colours-->
                    <tr>
                        <td class="info_text" id="triadic_text">Triads</td>
                    </tr>
                    <tr>
                        <td class="colour_main"></td>
                    </tr>
                    <tr>
                        <td id="triadic_colour1"></td>
                    </tr>
                    <tr>
                        <td id="triadic_colour2"></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    
                    <!--Analogous Colours-->
                    <tr>
                        <td class="info_text" id="analogous_text">Analogous</td>
                    </tr>
                    <tr>
                        <td class="colour_main"></td>
                    </tr>
                    <tr>
                        <td id="analogous_colour1"></td>
                    </tr>
                    <tr>
                        <td id="analogous_colour2"></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    
                    <!--Tetradic Colours-->
                    <tr>
                        <td class="info_text" id="tetradic_text">Analogous</td>
                    </tr>
                    <tr>
                        <td class="colour_main"></td>
                    </tr>
                    <tr>
                        <td id="tetradic_colour1"></td>
                    </tr>
                    <tr>
                        <td id="tetradic_colour2"></td>
                    </tr>
                    <tr>
                        <td id="tetradic_colour3"></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </body>
</html>