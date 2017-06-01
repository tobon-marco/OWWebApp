$filename = 'heroesAndAbilities.csv';

open($fh, '<', $filename)
or die "Could not open file";

$header = <$fh>;
$header = <$fh>;

#HEROES TABLE
$templateSQL = "INSERT INTO HEROES VALUES ( 0, ";


#ABILITIES TABLE
$templateSQL2 = "INSERT INTO ABILITIES VALUES ( X, ";

while(<$fh>)
{
    $row = $_;
    chomp $row;
    @data =  split ",", $row;

    $sql = $templateSQL . "'$data[0]'" . ", " . $data[6] . ", " . "'$data[7]'" . ");";
    print "$sql\n";

    $sql2 = $templateSQL2 . "'$data[1]'" . ", " . "'$data[2]'" . ", " . "'$data[3]'" . ", " . "'$data[4]'" . ", " . "'$data[5]'" . ");";
    print "$sql2\n";
    print "\n\n";
}


