function sym() {
    var ax = document.getElementById("ax");
    var bx = document.getElementById("bx");
    var cx = document.getElementById("cx");
    var dx = document.getElementById("dx");
    var par1 = document.getElementById("par1");
    var par2 = document.getElementById("par2");
    if (par1.value == "ax" && par2.value == "bx") {
        ax.value = bx.value;
    }
    else
        if (par1.value == "ax" && par2.value == "cx") {
            ax.value = cx.value;
        }
        else
            if (par1.value == "ax" && par2.value == "dx") {
                ax.value = dx.value;
            }
            else
                if (par1.value == "ax" && par2.value == "ax") {
                    ax.value = ax.value;
                }
                else
                    if (par1.value == "bx" && par2.value == "ax") {
                        bx.value = ax.value;
                    }
                    else
                        if (par1.value == "bx" && par2.value == "cx") {
                            bx.value = cx.value;
                        }
                        else
                            if (par1.value == "bx" && par2.value == "dx") {
                                bx.value = dx.value;
                            }
                            else
                                if (par1.value == "bx" && par2.value == "bx") {
                                    bx.value = bx.value;
                                }
                                else
                                    if (par1.value == "cx" && par2.value == "ax") {
                                        cx.value = ax.value;
                                    }
                                    else
                                        if (par1.value == "cx" && par2.value == "bx") {
                                            cx.value = bx.value;
                                        }
                                        else
                                            if (par1.value == "cx" && par2.value == "dx") {
                                                cx.value = dx.value;
                                            }
                                            else
                                                if (par1.value == "cx" && par2.value == "cx") {
                                                    cx.value = cx.value;
                                                }
                                                else
                                                    if (par1.value == "dx" && par2.value == "ax") {
                                                        dx.value = ax.value;
                                                    }
                                                    else
                                                        if (par1.value == "dx" && par2.value == "bx") {
                                                            dx.value = bx.value;
                                                        }
                                                        else
                                                            if (par1.value == "dx" && par2.value == "cx") {
                                                                dx.value = cx.value;
                                                            }
                                                            else
                                                                if (par1.value == "dx" && par2.value == "dx") {
                                                                    dx.value = dx.value;
                                                                }
                                                                else
                                                                    alert("cos poszlo nie tak :/");
}
