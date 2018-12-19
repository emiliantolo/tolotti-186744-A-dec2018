const fetch=require("node-fetch");

test("fetch test valid", () => {
    return fetch("https://tolotti-186744-a-dec2018.herokuapp.com/play?player1=1")
	.then(res => {
	    expect(res.status).toBe(200)
	})
})

test("fetch test invalid", () => {
    return fetch("https://tolotti-186744-a-dec2018.herokuapp.com/play?player1=a")
	.then(res => {
	    expect(res.status).toBe(400)
	})
})
