const renderList = ({data}) => {
    return (
        <Card style={{margin: 5}}>
        <View style={styles.container}>
        <Image style={styles.ImgStyle}
         source={{uri: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}/>
        </View>
        
        <View>
         <Text>{data.title}</Text>
        </View>
        </Card>
        
    )
}