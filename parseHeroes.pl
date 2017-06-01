$filename = 'Heroes.txt';

open($fh, '+<', $filename)
or die "Could not open file";

@names;
while ($row  = <$fh>)
{
	chomp $row;
    @arr = split(" ", $row);
    $str = join(' ',@arr[1..$#arr]);
    push(@names,$str); 
}

foreach $n (@names)
{
    print $fh "$n\n";
}

close($fh);

