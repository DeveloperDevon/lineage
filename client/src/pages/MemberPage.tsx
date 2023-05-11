import { useParams } from "react-router-dom"

export const MemberPage = () => {
  const { memberId } = useParams()

  return (
    <div>Member Page for member id {memberId}</div>
  )
}
