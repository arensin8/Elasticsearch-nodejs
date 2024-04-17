//command and query responsibility segregation

//Command : write - update - delete
//query : Read

//wrtite DB1 => (join , lookup) => write -> DB2
//Read !(aggregate,lookup,join,projection) => Read DB2 (find())