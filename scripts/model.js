function checkWin(buttons)
{
    //column win
    for(var ind=0;ind<3;ind++)
    {
        if(buttons[ind].innerHTML===whiteSpace)
        {
            continue;
        }
        if(buttons[ind].innerHTML===buttons[ind+3].innerHTML  &&  buttons[ind].innerHTML===buttons[ind+6].innerHTML)
        {
            return buttons[ind].innerHTML;
        }
    }
    
    //row win
    for(var ind=0;ind<9;ind+=3)
    {
        if(buttons[ind].innerHTML===whiteSpace)
        {
            continue;
        }
        if(buttons[ind].innerHTML===buttons[ind+1].innerHTML  &&  buttons[ind].innerHTML===buttons[ind+2].innerHTML)
        {
            return buttons[ind].innerHTML;
        }
    }
    
    //diagonals
    if(buttons[0].innerHTML!=whiteSpace  &&  buttons[0].innerHTML===buttons[4].innerHTML  &&  buttons[0].innerHTML===buttons[8].innerHTML)
    {
        return buttons[0].innerHTML;
    }
    if(buttons[2].innerHTML!=whiteSpace  &&  buttons[2].innerHTML===buttons[4].innerHTML  &&  buttons[2].innerHTML===buttons[6].innerHTML)
    {
        return buttons[2].innerHTML;
    }
}