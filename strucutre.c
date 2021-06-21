
struct elayer
{
   char Playername[50];
   int Playerage;
   char TeamName[50];

};

int a =1;

elayer captianprice;
elayer wicked;

captianprice.Playername ;
captianprice.Playerage ;
captianprice.TeamName = 'valo';

wicked.Playername;
wicked.Playerage ;
wicked.TeamName = 'valo';

scanf("%s\n",&captianprice.Playername );
printf("\n you entered %s",&captianprice.Playername );

scanf("%d\n",&captianprice.Playerage );
printf("%d\n",&captianprice.Playerage );

scanf("%s %d\n",&wicked.Playername,&wicked.Playerage );
printf("%d %s\n",&wicked.Playerage,&wicked.Playername );
