
import fetch from "node-fetch"

import data66 from "./clientsSaturday.js"







let Data;
const MicrosoftWorkspace = "teams-bot"
//const KoneWorkspace = `[data-shared-channel='kone']`
const PandaWorspace = "pandacoachbot"
const BrainlyWorkspace = "brainly"
const CulturedBrainWorkspace = "culturedbrain"
const HelsinkiCityWorkspace = "helsinkicityworkspace";


const morningSession = "6200d57014d1b95a4c82dc68"
const eveningSession = "61b65debfe32175adb317233"

//SEND
//msteams-fibo
///////      data_userid
////////     channel_id(ssessionid)
//shared_channel=teams-bot
//team_id=teams_abc


async function sendHelsinkiCity(id, session, team_id, day, username, email, workspace, hours, minutes) {
    try {
        const res2 = await fetch(
            `https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=helsinkicityworkspace&team_id=${team_id}&session_type=Main&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`,
            {
              headers: {
                accept: "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua":
                  '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
              },
              referrer: "https://www.fibofy.com/panda/admin/",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include",
            }
          );
        const result1 = await res2.json()
        console.log(result1.data.body.channel.id)
        const channel_id = result1.data.body.channel.id
        var response = await fetch(
            `https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/${channel_id}/${session}?shared_channel=helsinkicityworkspace&team_id=${team_id}&session_type=Main`,
            {
              headers: {
                accept: "*/*",
                authorization:
                  "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua":
                  '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
              },
              referrer: "https://www.fibofy.com/panda/admin/",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include",
            }
          );

        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found.") {
            console.log(id)
        }

        const put = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id: id,
                day: day,
                username: username,
                email: email,
                workspace: workspace,
                morninghours: parseInt(hours),
                morningminutes: parseInt(minutes),
                eveninghours: null,
                eveningminutes: null,
                morningsession: null,
                eveningsession: '',
                team_id: team_id,
            }),
        });
        if (!put.ok) {
            throw new Error(`Error! status: ${put.status}`);
        }
        const result2 = await put.json();
        console.log(result2.morningsession);
    } catch (err) {
        console.log(err);
    }
}


async function sendMicrosoft(id, session, day, username, email, workspace, hours, minutes, team_id) {
    try {
        const response = await fetch(`https://www.fibofy.com/msteams-fibo/startNewConversation/${id}/channel_id/${session}?shared_channel=teams-bot&team_id=teams_abc&session_type=Main`, {
            "headers": {
                "accept": "*/*",
                "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found.") {
            console.log(id)
        }

        const put = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id: id,
                day: day,
                username: username,
                email: email,
                workspace: workspace,
                morninghours: parseInt(hours),
                morningminutes: parseInt(minutes),
                eveninghours: null,
                eveningminutes: null,
                morningsession: null,
                eveningsession: '',
                team_id: team_id,
            }),
        });
        if (!put.ok) {
            throw new Error(`Error! status: ${put.status}`);
        }
        const result2 = await put.json();
        console.log(result2.morningsession);


    } catch (err) {
        console.log(err);
    }
}

async function sendBrainly(id, session, team_id, day, username, email, workspace, hours, minutes) {
    try {
        const res2 = await fetch(
            `https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=brainly&team_id=${team_id}&session_type=Main&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`,
            {
              headers: {
                accept: "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua":
                  '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
              },
              referrer: "https://www.fibofy.com/panda/admin/",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include",
            }
          );
        const result1 = await res2.json()
        console.log(result1.data.body.channel.id)
        const channel_id = result1.data.body.channel.id
        var response = await fetch(
            `https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/${channel_id}/${session}?shared_channel=brainly&team_id=${team_id}&session_type=Main`,
            {
              headers: {
                accept: "*/*",
                authorization:
                  "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua":
                  '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
              },
              referrer: "https://www.fibofy.com/panda/admin/",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include",
            }
          );

        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found.") {
            console.log(id)
        }

        const put = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id: id,
                day: day,
                username: username,
                email: email,
                workspace: workspace,
                morninghours: parseInt(hours),
                morningminutes: parseInt(minutes),
                eveninghours: null,
                eveningminutes: null,
                morningsession: null,
                eveningsession: '',
                team_id: team_id,
            }),
        });
        if (!put.ok) {
            throw new Error(`Error! status: ${put.status}`);
        }
        const result2 = await put.json();
        console.log(result2.morningsession);
    } catch (err) {
        console.log(err);
    }
}

async function sendCulturedBrain(id, session, team_id, day, username, email, workspace, hours, minutes) {
    try {
        const res2 = await fetch(`https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=culturedbrain&team_id=${team_id}&session_type=Main&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        const result1 = await res2.json()
        console.log(result1.data.body.channel.id)
        const channel_id = result1.data.body.channel.id
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/${channel_id}/${session}?shared_channel=culturedbrain&team_id=${team_id}&session_type=Main`, {
            "headers": {
                "accept": "*/*",
                "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });

        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found.") {
            console.log(id)
        }

        const put = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id: id,
                day: day,
                username: username,
                email: email,
                workspace: workspace,
                morninghours: parseInt(hours),
                morningminutes: parseInt(minutes),
                eveninghours: null,
                eveningminutes: null,
                morningsession: null,
                eveningsession: '',
                team_id: team_id,
            }),
        });
        if (!put.ok) {
            throw new Error(`Error! status: ${put.status}`);
        }
        const result2 = await put.json();
        console.log(result2.morningsession);
    } catch (err) {
        console.log(err);
    }
}


async function sendPandatron(id, session, day, username, email, workspace, hours, minutes, team_id) {
    try {
        const res2 = await fetch(`https://www.fibofy.com/panda-sharedchannels/checkUserPrivateChannel/${id}?shared_channel=pandacoachbot&team_id=T014DKXB53N&session_type=Main&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        const result1 = await res2.json()
        console.log(result1.data.body.channel.id)
        const channel_id = result1.data.body.channel.id
        var response = await fetch(`https://www.fibofy.com/panda-sharedchannels/startNewConversation/${id}/${channel_id}/${session}?shared_channel=pandacoachbot&team_id=T014DKXB53N&session_type=Main`, {
            "headers": {
                "accept": "*/*",
                "authorization": "8a4bfadf32bfb287126fd9ef9ebac259ca32f132bd5cb4f8391edf9a69a06758",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.fibofy.com/panda/admin/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });

        const result = await response.text();
        console.log(result, " id: ", id);
        if (result === "User ref not found.") {
            console.log(id)
        }
    } catch (err) {
        console.log(err);
    }

    const put = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            id: id,
            day: day,
            username: username,
            email: email,
            workspace: workspace,
            morninghours: parseInt(hours),
            morningminutes: parseInt(minutes),
            eveninghours: null,
            eveningminutes: null,
            morningsession: null,
            eveningsession: '',
            team_id: team_id,
        }),
    });
    if (!put.ok) {
        throw new Error(`Error! status: ${put.status}`);
    }
    const result2 = await put.json();
    console.log(result2.morningsession);
}
async function getMonday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=MondayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return await result
    } catch (err) {
        console.log(err);
    }
}

async function getTuesday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=TuesdayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return await result
    } catch (err) {
        console.log(err);
    }
}

async function getWednesday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=WednesdayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        return await result
    } catch (err) {
        console.log(err);
    }
}

const getThursday = async () => {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=ThursdayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        //console.log(result)
        return await result
    } catch (err) {
        console.error(err);
    }
}


async function getFriday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=FridayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        //console.log(result);
        return await result
    } catch (err) {
        console.log(err);
    }
}
async function getSaturday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=SaturdayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        //console.log(result);
        return await result
    } catch (err) {
        console.log(err);
    }
}
async function getSunday() {
    try {
        var response = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=SundayM', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        //console.log(result);
        return await result
    } catch (err) {
        console.log(err);
    }
}


setInterval(() => {
    var date = new Date();
    let wait = 1;
    const expr = date.getDay();
    switch (expr) {
        case 1:
            console.log("Today is Monday");
            (async () => {
                Data = await getMonday()
            })();
            break;
        case 2:
            console.log("Today is Tuesday");
            (async () => {
                Data = await getTuesday()
            })();
            break;
        case 3:
            console.log("Today is Wednesday");
            (async () => {
                Data = await getWednesday()
            })();
            break;
        case 4:
            console.log("Today is Thursday");
            (async () => {
                Data = await getThursday()
            })();
            break;
        case 5:
            console.log("Today is Friday");
            (async () => {
                Data = await getFriday()
            })();
            break;
        case 6:
            console.log("Today is Saturday");
            (async () => {
                Data = await getSaturday()
            })();
            break;
        case 0:
            console.log("Today is Sunday");
            (async () => {
                Data = await getSunday()
            })();
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }

    console.log("micro " + date.toISOString().slice(0, 10), " hours: " + date.getHours(), " minutes: " + date.getMinutes(), " day " + date.getDay())
    if (Data) {
        for (let index = 0; index < Data.length; index++) {
            const element = Data[index];
            //console.log(element)
            if ((element.morninghours === date.getHours() && element.morningminutes === date.getMinutes()) && element.morningsession != null) {
                console.log("here")
                setTimeout(() => {
                    if (element.workspace == MicrosoftWorkspace) {
                        sendMicrosoft(element.id, element.morningsession, element.day, element.username, element.email, element.workspace, element.morninghours, element.morningminutes, element.team_id)
                    }
                    if (element.workspace == BrainlyWorkspace) {
                        sendBrainly(element.id, element.morningsession, element.team_id, element.day, element.username, element.email, element.workspace, element.morninghours, element.morningminutes)
                    }
                    if (element.workspace == HelsinkiCityWorkspace) {
                        sendHelsinkiCity(element.id, element.morningsession, element.team_id, element.day, element.username, element.email, element.workspace, element.morninghours, element.morningminutes)
                    }
                    if (element.workspace == CulturedBrainWorkspace) {
                        sendCulturedBrain(element.id, element.morningsession, element.team_id, element.day, element.username, element.email, element.workspace, element.morninghours, element.morningminutes)
                    }
                    if (element.workspace == PandaWorspace) {
                        sendPandatron(element.id, element.morningsession, element.day, element.username, element.email, element.workspace, element.morninghours, element.morningminutes, element.team_id)
                    }
                    //run(element.id, element.workspace, element.session);
                }, wait * 2000);
                wait += 2
            }

        }
    }
}, 60000);
























