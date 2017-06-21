initSidebarItems({"enum":[["Consumed","Enum used to indicate if a parser consumed any items of the stream it was given as an input."],["Error","Enum used to store information about an error that has occurred during parsing."],["FastResult",""],["Info","Enum holding error information. Variants are defined for `Stream::Item` and `Stream::Range` as well as string variants holding simple descriptions."]],"fn":[["from_iter","Converts an `Iterator` into a stream."],["from_read","Creates a `StreamOnce` instance from a value implementing `std::io::Read`."],["uncons",""],["uncons_while","Removes items from the input while `predicate` returns `true`."]],"struct":[["BufferedStream","A `BufferedStream` wraps an instance `StreamOnce`, allowing it to be used as a `Stream`."],["BytePosition","Struct which represents a position in a byte stream."],["IteratorStream","Wrapper around iterators which allows them to be treated as a stream. Returned by [`from_iter`]."],["ParseError","Struct which hold information about an error that occurred at a specific position. Can hold multiple instances of `Error` if more that one error occurred in the same position."],["ReadStream",""],["SharedBufferedStream",""],["SliceStream","Newtype for constructing a stream from a slice where the items in the slice are not copyable."],["SourcePosition","Struct which represents a position in a source file."],["State","The `State<I>` struct keeps track of the current position in the stream `I` using the `Positioner` trait to update the position."]],"trait":[["Parser","By implementing the `Parser` trait a type says that it can be used to parse an input stream into the type `Output`."],["Positioner","Trait for updating the position for types which can be yielded from a `Stream`."],["Range",""],["RangeStream","A `RangeStream` is an extension of `Stream` which allows for zero copy parsing."],["Stream","A stream of tokens which can be duplicated"],["StreamOnce","`StreamOnce` represents a sequence of items that can be extracted one by one."]],"type":[["ConsumedResult","A `Result` type which has the consumed status flattened into the result. Conversions to and from `std::result::Result` can be done using `result.into()` or `From::from(result)`"],["ParseResult","A type alias over the specific `Result` type used by parsers to indicate wether they were successful or not. `O` is the type that is output on success. `I` is the specific stream type used in the parser."]]});