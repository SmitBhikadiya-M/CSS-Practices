export const postStatues = ["all", "published", "draft", "unpublished"];

export const generatPostStatuesOption = () => {
  return postStatues.map((op) => ({ value: op, title: op.charAt(0)?.toUpperCase() + op.substring(1) }))
}

export const generatePost = () => {
  return {
    id: crypto.randomUUID(),
    userId: 1,
    status: postStatues.slice(1, postStatues.length)[Math.floor((Math.random() * 3))],
    title: "Blood Donation Campaign",
    body: "Your participation can bring hope and happiness to those fighting critical illnesses. Let's make a difference!",
    createdAt: new Date()
  }
}

export const getStatusColor = (status) => {
  if (status === 'published') return 'success';
  else if (status === 'draft') return 'secondary';
  else return 'primary';
}