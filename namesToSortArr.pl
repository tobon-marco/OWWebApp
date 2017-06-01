$filename = 'Heroes.txt';

open($fh, '<', $filename)
or die "Could not open file";

@names;
$count = 0;

while ($row  = <$fh>)
{
    chomp $row;
    push(@names,$row);
}

@names = sort @names;

foreach $n (@names)
{
    print "{ id: $count, name: '$n' },\n";
    $count++;
}
