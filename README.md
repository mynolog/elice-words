# 나만의 단어장

## 구현한 기능
- [x] 단어 추가(Create)
- [x] 단어 출력(Read)
- [x] 단어 수정(Update)
- [x] 단어 삭제(Delete)
- [x] 모달 구현

## TODO
- [ ] 식별자 네이밍 컨벤션 맞추기
- [ ] useFetch 커스텀 훅 만들기
- [ ] useModal 커스텀 훅 만들기
- [ ] CommonInput modalFlag 의존성 제거로 확장성 올리기
- [ ] 단어 한글 초성 검색

## 버그
- [x] 모달 오버레이 클릭으로 모달 종료 시: word가 비워지지 않는 문제: CreateWordModal 컴포넌트 value state -> ModalContainer 컴포넌트로 이동 후 input 내용 삭제 로직 추가 예정